import React from 'react'
import PropTypes from 'prop-types'


function Message(props) {

    console.log('Message   from = ' + props.from);

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

Message.propTypes = {
    from: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string
}

export default Message;
