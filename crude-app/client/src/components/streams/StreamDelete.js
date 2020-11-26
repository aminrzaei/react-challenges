import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

const StreamDelete = ({ match, fetchStream, deleteStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  const onCancel = () => {
    history.push('/');
  };
  const onDelete = () => {
    deleteStream(match.params.id);
    history.push('/');
  };

  const actions = (
    <React.Fragment>
      <button class="grey ui button" onClick={() => onCancel()}>
        Cancel
      </button>
      <button class="negative ui button" onClick={() => onDelete()}>
        Yes Delete it !
      </button>
    </React.Fragment>
  );

  const renderTitle = () => {
    if (!stream) {
      return <div>Loading ...</div>;
    } else {
      return `Are you sure you want to delete "${stream.title}"?`;
    }
  };

  return (
    <div>
      <Modal
        header="Delete Stream"
        content={renderTitle()}
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
