import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="Card">
            <h1 className='title'>{props.title}</h1>
            <div className='description'>{props.description}</div>
            {props.children}
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default Card;