import React from 'react'
import PropTypes from 'prop-types'
import Response from "./Response";
import Message from "./Message";
import Typing from "./Typing";


function UniMessage(props) {

    console.log('UniMessage id = ' + props.item.id, 'type = ' + props.item.type, 'from = ' + props.item.from.name);

    // Определяем какой компонент создать
    if (props.item.type == 'response')
    {
        return (
            <Response key={props.item.id} from={props.item.from.name} message={props.item.text} time={props.item.time} />
        );

    }
    else if (props.item.type == 'message')
    {
        return (
            <Message key={props.item.id} from={props.item.from.name} message={props.item.text} time={props.item.time} />
        );

    }
    else if (props.item.type == 'typing')
    {
        return (
            <Typing key={props.item.id} from={props.item.from.name} message={props.item.text} time={props.item.time} />
        );

    }
    else
        return null;
}

UniMessage.propTypes = {
    item: PropTypes.object.isRequired
}

export default UniMessage;
