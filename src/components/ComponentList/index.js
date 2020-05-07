import {connect} from "react-redux";
import React from "react";
import UniComponent from "./Component";
import {fetchComponents} from "../../services/component/actions";
import LiveSearch from "../LiveSearch";
import {HDDS, MOTHERBOARDS, PROCESSORS, RAMS, SSDS, VIDEO_CARDS} from "../constants";
import {addComponentToConfiguration} from "../../services/configuration/actions";
import {showConfiguration} from "../../services/content/actions";

const componentClasses = {
    [PROCESSORS]: UniComponent, [VIDEO_CARDS]: UniComponent, [RAMS]: UniComponent,
    [HDDS]: UniComponent, [SSDS]: UniComponent, [MOTHERBOARDS]: UniComponent
};

export const ComponentList = ({components, componentType, fetchComponents, addComponentToConfiguration}) => {
    let Component = componentClasses[componentType];

    const componentsList = [];

    if (components) {
        components.forEach((component) => {
            componentsList.push(
                <Component key={component.id} component={component}
                           onClick={() => addComponentToConfiguration(component, componentType)} buttonName="Использовать для сборки"/>
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