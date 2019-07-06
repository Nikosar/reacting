import {connect} from "react-redux";
import React from "react";
import Processor from "./Processor";
import VideoCard from "./VideoCard";

const componentClasses = {Processor, VideoCard};

const ComponentList = ({components, entityName}) => {
    let Component = componentClasses[entityName];

    const componentsList = [];
    if (components) {
        components.forEach((component) => {
            componentsList.push(
                <Component key={component.id} component={component}/>
            )
        });
    }
    return componentsList;
};

const mapStateToProps = state => ({
    components: state.server.components,
    entityName: state.server.entityName
});

export default connect(mapStateToProps)(ComponentList);