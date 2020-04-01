import React from "react";
import ComponentList from "../ComponentList";
import {connect} from "react-redux";
import Configuration from "../Configuration";
import ConfigurationList from "../ConfigurationList";

const contentClasses = {ComponentList, Configuration, ConfigurationList};

const Content = ({pageName}) => {
    let Content = contentClasses[pageName];
    return <Content/>
};

const mapStateToProps = state => ({
        pageName: state.content.pageName
    }
);

export default connect(mapStateToProps)(Content);