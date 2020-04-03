import React from "react";
import {connect} from "react-redux";
import {fetchConfiguration} from "../../services/configuration/actions";

const Config = ({config, fetchConfiguration}) => {

    return <div className="row component_block">
        <a href="/" onClick={(e) => {
            e.preventDefault();
            fetchConfiguration(config.id)
        }}>{Object.entries(config).map(([k, v]) => " " + k + ": " + v)}</a>
    </div>
};

const ConfigurationList = ({configurations, fetchConfiguration}) => {

    let configArray = Object.values(configurations);

    return <div className="container">
        {/*<div className="row">*/}
        {configArray.map(v => <Config config={v} fetchConfiguration={fetchConfiguration}/>)}
        {/*</div>*/}
    </div>
};

const mapStateToProps = (state) => ({
    configurations: state.configurationList.configurations
});


export default connect(mapStateToProps, {fetchConfiguration})(ConfigurationList);


