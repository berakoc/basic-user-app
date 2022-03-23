import PropTypes from 'prop-types';
import { useState } from 'react';
import './Input.css';

const Input = ({type, label, placeholder, error, bindForm}) => {
    const [isFocused, setFocused] = useState(false);
    return (
        <div className='Input'>
            <label className={'label'.concat(isFocused ? ' focused' : '')}>{label}</label>
            <input {...bindForm() } className={'input'.concat(isFocused ? ' focused' : '')} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} type={type} placeholder={placeholder} />
            <div className='errorMessage'>{error?.message}</div>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    bindForm: PropTypes.func.isRequired,
}

Input.defaultProps = {
    type: 'text',
}

export default Input;