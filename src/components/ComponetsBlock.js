import React from "react";
import Processor from "./Processor";
import VideoCard from "./VideoCard";

const ComponentsBlock = ({components, entityName}) => {
    let Component;
    switch (entityName) {
        case 'processors':
            Component = Processor;
            break;
        case 'videoCards':
            Component = VideoCard;
            break;
    }

    const componentsBlock = [];
    if (components) {
        components.forEach((component) => {
            componentsBlock.push(
                <Component key={component.id} component={component}/>
            )
        });
    }
    return <div className="col-lg-8">{componentsBlock}</div>;
};

export default ComponentsBlock;
