import React from 'react'
import PropTypes from 'prop-types'


function Response(props) {

    console.log('Response   from = ' + props.from);

    return (

        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{props.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{props.from}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {props.message}
            </div>
        </li>
    );
}

Response.propTypes = {
    from: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string
}

export default Response;
