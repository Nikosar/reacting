import PropTypes from 'prop-types'
import React from "react";
import {connect} from "react-redux";
import Schema from "../Schema";
import ComponentProperties from "../ComponentList/ComponentProperties";
import {deleteConfiguration, removeComponent, saveConfiguration} from "../../services/configuration/actions";
import {HDDS, MOTHERBOARDS, PROCESSORS, RAMS, SSDS, VIDEO_CARDS} from "../constants";

const Configuration = ({configuration, removeComponent, saveConfiguration, deleteConfiguration}) => {

    const componentKeys = [MOTHERBOARDS, PROCESSORS, VIDEO_CARDS, RAMS, SSDS, HDDS];

    const configurationComponents = () => {
        return Object.entries(configuration)
            .filter(([k]) => componentKeys.includes(k))
            .map(([componentType, components]) => components.map(component => {
                return <li key={component.id}>
                    <ComponentProperties component={component}/>
                    <button className="submit_button" type="button"
                            onClick={() => removeComponent(component.id, componentType)}>Удалить</button>
                </li>;
            }))
    };

    return <div className="container">
        <div className="row">
            <div className="col-6">
                <Schema/>
            </div>
            <div className="col-6 component_block">
                <ul>
                    {configurationComponents()}
                </ul>
                <div className="row">
                    <div className="col-6">
                        <button className="submit_button" type="button"
                                onClick={() => saveConfiguration(configuration)}>Сохранить конфигурацию
                        </button>
                    </div>
                    <div className="col-6">
                        <button className="submit_button" type="button"
                                onClick={() => deleteConfiguration(configuration.id)}>Удалить конфигурацию
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </div>;

};

const mapStateToProps = (state) => ({
    configuration: state.configuration,
});

export default connect(mapStateToProps, {removeComponent, saveConfiguration, deleteConfiguration})(Configuration);

Configuration.propTypes = {
    configuration: PropTypes.object
};