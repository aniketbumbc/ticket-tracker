import React, { useEffect } from 'react';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (log.loading || log.logs === null) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h3 className='center'> System Logs</h3>
      </li>
      {!log.loading && log.logs.length === 0 ? (
        <p className='center'>No logs to show....</p>
      ) : (
        log.logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStaeToProp = (state) => ({
  log: state.log,
});

const mapDispatchToProp = (dispatch) => ({
  getLogs: () => dispatch(getLogs()),
});

export default connect(mapStaeToProp, mapDispatchToProp)(Logs);
