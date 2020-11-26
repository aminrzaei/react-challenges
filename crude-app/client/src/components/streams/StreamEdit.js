import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

import StreamForm from './StreamFrom';

const StreamEdit = ({ stream, fetchStream, match, editStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  if (!stream) return <div>Loading ...</div>;

  const onSubmit = (formValues) => {
    editStream(match.params.id, formValues);
  };
  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={_.pick(stream, 'title', 'description')}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
