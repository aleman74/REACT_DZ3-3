import React from 'react'
import PropTypes from 'prop-types'
import UniMessage from "./UniMessage";


function MessageHistory(props) {

    console.log('props.list.length = ' + props.list.length);

    if (props.list.length > 0) {

        return (

            <ul>
                {props.list.map(o => <UniMessage key={o.id} item={o} />)}
            </ul>
        );

        return null;
    }
}

UniMessage.propTypes = {
    list: PropTypes.array
}

export default MessageHistory;
