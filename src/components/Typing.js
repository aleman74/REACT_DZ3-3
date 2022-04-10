import React from 'react'
import PropTypes from 'prop-types'


function Typing(props) {

    console.log('Typing   from = ' + props.from);

    return (

        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{props.from}</span>
                <span className="message-data-time">{props.time}</span>
            </div>
            <div className="message my-message">
                {props.message}
            </div>
        </li>
    );
}

Typing.defaultProps = {
    message: 'typing ...'
};

Typing.propTypes = {
    from: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string
}

export default Typing;
