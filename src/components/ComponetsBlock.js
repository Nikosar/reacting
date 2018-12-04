import React from "react";
import Processor from "./Processor";
import VideoCard from "./VideoCard";

const ComponentsBlock = props => {
    let Component;
    switch (props.entityName) {
        case 'processors':
            Component = Processor;
            break;
        case 'videoCards':
            Component = VideoCard;
            break;
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
