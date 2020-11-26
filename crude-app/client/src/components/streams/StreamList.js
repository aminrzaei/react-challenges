import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = ({ streams, fetchStreams, userId, isSignedIn }) => {
  const renderButtons = (id) => {
    return (
      <div className="ui buttons right floated">
        <Link to={`/streams/edit/${id}`} className="ui button">
          Edit
        </Link>
        <Link to={`/streams/delete/${id}`} className="ui negative button">
          Delete
        </Link>
      </div>
    );
  };
  const renderCreateButton = () => {
    if (isSignedIn) {
      return (
        <Link to="/streams/new" className="item">
          <button className="ui blue button">Create new stream</button>
        </Link>
      );
    } else return null;
  };
  const rederStreams = streams.map((stream) => {
    return (
      <div key={stream.id} className="item">
        {userId === stream.userId ? renderButtons(stream.id) : null}
        <i className="middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{rederStreams}</div>
      {renderCreateButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
