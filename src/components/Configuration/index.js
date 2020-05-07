import PropTypes from 'prop-types'
import React from "react";
import {connect} from "react-redux";
import Schema from "../Schema";
import ComponentProperties from "../ComponentList/ComponentProperties";
import {deleteConfiguration, removeComponentFromConfiguration, saveConfiguration} from "../../services/configuration/actions";
import {HDDS, MOTHERBOARDS, PROCESSORS, RAMS, SSDS, VIDEO_CARDS} from "../constants";
import Component from "../ComponentList/Component";

const Configuration = ({configuration, removeComponent, saveConfiguration, deleteConfiguration}) => {

    const componentKeys = [MOTHERBOARDS, PROCESSORS, VIDEO_CARDS, RAMS, SSDS, HDDS];

    const configurationComponents = () => {
        return Object.entries(configuration)
            .filter(([k]) => componentKeys.includes(k))
            .map(([componentType, components]) => components.map(component => {
                return <div className="row" key={component.id}>
                    <Component component={component} onClick={() => removeComponent(component.id, componentType)} buttonName="Удалить"/>
                </div>;
            }))
    };

    return <div className="container">
        <div className="row">
            <div className="col-md-6">
                <Schema/>
            </div>
            <div className="col-md-6">
                Here is some info and buttons underneath
                <div className="row">
                    <div className="col-md-6">
                        <button className="submit_button" type="button"
                                onClick={() => saveConfiguration(configuration)}>Сохранить конфигурацию
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button className="submit_button" type="button"
                                onClick={() => deleteConfiguration(configuration.id)}>Удалить конфигурацию
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-12 component_block">
                {configurationComponents()}
            </div>

        </div>
    </div>;

};

const mapStateToProps = (state) => ({
    configuration: state.configuration,
});

export default connect(mapStateToProps, {removeComponent: removeComponentFromConfiguration, saveConfiguration, deleteConfiguration})(Configuration);

Configuration.propTypes = {
    configuration: PropTypes.object
};