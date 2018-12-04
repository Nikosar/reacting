import React from "react";
import Processor from "../components/Processor";
import VideoCard from "../components/VideoCard";

const ComponentsBlock = props => {
    let Component;
    switch (props.entityName) {
        case 'processor':
            Component = Processor;
            break;
        case 'videoCard':
            Component = VideoCard;
            break;
        default:
            Component = Processor;
    }

    const componentsBlock = [];
    if (props.components) {
        props.components.forEach((component) => {
            componentsBlock.push(
                <Component key={component.id} component={component}/>
            )
        });
    }
    return <div className="col-lg-8">{componentsBlock}</div>;
};

export default ComponentsBlock;
