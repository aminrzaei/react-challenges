const API_URL = 'http://localhost:8089';

export async function listMarkets() {
  const response = await fetch(`${API_URL}/api/markets`);
  return response.json();
}

export async function createMarket(entry) {
  const response = await fetch(`${API_URL}/api/markets`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
  let json;
  if (response.headers.get('content-type').includes('text/html')) {
    const message = await response.text();
    json = {
      message,
    };
  } else {
    json = await response.json();
  }
  if (response.ok) {
    return json;
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
}
