import PropTypes from 'prop-types';
import { useState } from 'react';
import './Toggle.css';

const Toggle = (props) => {
  const [isToggled, setToggled] = useState(false);
  const toggle = () => {
    setToggled(!isToggled);
    props.handleToggle(isToggled);
  };
  const getFlowStyle = () => {
    return isToggled
      ? {
          left: '76px',
        }
      : {
          left: '4px',
        };
  };
  return (
    <div className='Toggle'>
      <div
        onClick={toggle}
        className={'text left '.concat(isToggled ? 'passive' : 'active')}
      >
        {props.offText}
      </div>
      <div
        onClick={toggle}
        className={'text right '.concat(isToggled ? 'active' : 'passive')}
      >
        {props.onText}
      </div>
      <div className='toggleFlow' style={getFlowStyle()} />
    </div>
  );
};

Toggle.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  offText: PropTypes.string.isRequired,
  onText: PropTypes.string.isRequired,
};

export default Toggle;
