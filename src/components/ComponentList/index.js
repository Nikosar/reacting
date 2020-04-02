import {connect} from "react-redux";
import React from "react";
import UniComponent from "./Component";
import {fetchComponents} from "../../services/component/actions";
import LiveSearch from "../LiveSearch";
import {HDD, MOTHERBOARD, PROCESSOR, RAM, SSD, VIDEO_CARD} from "../constants";
import {addComponentToConfiguration} from "../../services/configuration/actions";
import {showConfiguration} from "../../services/content/actions";

const componentClasses = {
    [PROCESSOR]: UniComponent, [VIDEO_CARD]: UniComponent, [RAM]: UniComponent,
    [HDD]: UniComponent, [SSD]: UniComponent, [MOTHERBOARD]: UniComponent
};

const ComponentList = ({components, componentType, fetchComponents, addComponentToConfiguration}) => {
    let Component = componentClasses[componentType];

    const componentsList = [];

    if (components) {
        components.forEach((component) => {
            componentsList.push(
                <Component key={component.id} component={component}
                           onClick={() => addComponentToConfiguration(component, componentType)}/>
            )
        });
    }
    return <div className="container">
        <div className="row">
            <LiveSearch action={fetchComponents} componentType={componentType}/>
        </div>
        <div className="row">
            <h2>{componentType}</h2>
        </div>
        <div className="row">
            {componentsList}
        </div>
    </div>;
};

const mapStateToProps = state => ({
    components: state.component.components,
    componentType: state.component.componentType
});

export default connect(mapStateToProps, {
    fetchComponents,
    addComponentToConfiguration,
    showConfiguration
})(ComponentList);