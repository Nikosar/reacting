import React from "react";
import {connect} from "react-redux";
import {addComponentToConfiguration} from "../../../services/configuration/actions";
import {showConfiguration} from "../../../services/content/actions";
import PropTypes from 'prop-types';


const AddComponentButton = ({component, showConfiguration, addComponentToConfiguration}) => {
    const onClick = () => {
        addComponentToConfiguration(component);
        showConfiguration();
    };

    return <button className="submit_button" type="button"
                   onClick={onClick}>Использовать для сборки</button>
};

AddComponentButton.propTypes = {
    component: PropTypes.object.isRequired,
    showConfiguration: PropTypes.func.isRequired,
    addComponentToConfiguration: PropTypes.func.isRequired
};

export default connect(null, {showConfiguration, addComponentToConfiguration})(AddComponentButton);