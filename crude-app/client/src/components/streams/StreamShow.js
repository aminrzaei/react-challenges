import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = ({ fetchStream, stream, match }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);
  if (!stream) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h2>{stream.title}</h2>
      <h4>{stream.description}</h4>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
