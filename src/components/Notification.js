import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Notification.css';
import { useEffect, useState } from 'react';

const Notification = ({ title, message, type, setItself }) => {
  const [shouldClose, setShouldClose] = useState(false);
  useEffect(() => {
    if (shouldClose) {
      setTimeout(() => {
        setItself(null);
      }, 300);
    }
  }, [shouldClose, setItself]);
  return (
    <div className={`notification ${shouldClose ? 'closed' : ''} ${type}`}>
      <div className='wrapper'>
        <FontAwesomeIcon
          icon={faTimes}
          size={'lg'}
          className='close'
          onClick={() => setShouldClose(true)}
        />
        <div className='title'>{title}</div>
        <div className='message'>{message}</div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setItself: PropTypes.func.isRequired,
};

export default Notification;
