import React, { useState } from 'react';
//import TechSelectOptions from '../techs/TechSelectOptions';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFname] = useState('');
  const [lastName, setLname] = useState('');

  //   const onSubmit = () => {
  //     if (message === '' || tech === '') {
  //       M.toast({ html: 'Please enter a message and tech' });
  //     } else {
  //       const newLog = {
  //         message,
  //         attention,
  //         tech,
  //         date: new Date(),
  //       };

  //      // addLog(newLog);

  //       M.toast({ html: `Log added by ${tech}` });

  //       // Clear Fields
  //       setMessage('');
  //       setTech('');
  //       setAttention(false);
  //     }
  //   };

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a name' });
    } else {
      console.log(firstName, lastName);
      setFname('');
      setLname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFname(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLname(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

// AddLogModal.propTypes = {
//   addLog: PropTypes.func.isRequired,
// };
export default AddTechModal;
//export default connect(null, { addLog })(AddLogModal);
