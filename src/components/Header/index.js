import React from "react";
import {connect} from "react-redux";
import {showConfiguration, showConfigurationList} from "../../services/content/actions";
import {fetchConfigurations} from "../../services/configurationList/actions";

const Header = ({showConfiguration, fetchConfigurations, showConfigurationList}) => {
    return <header className="navbar">
            <div className="container align-items-center">

                <a className="navbar-brand" href="/"><span className="LOGO">LOGO</span></a>
                <ul className="navbar-nav flex-row ml-md-auto">
                    <li className="nav-item"><a className="white_link" href="#" onClick={
                        (e) => {
                            e.preventDefault();
                            showConfiguration();
                        }
                    }>Текущая конфигурация</a></li>
                    <li className="nav-item"><input type="text" className="top_search"/></li>
                    <li className="nav-item"><a className="white_link" href="#" onClick={
                        (e) => {
                            e.preventDefault();
                            fetchConfigurations();
                            showConfigurationList();
                        }
                    }>Конфигурации</a></li>
                    <li className="nav-item"><a className="white_link" href="#">Nikosar</a></li>
                </ul>
            </div>
        </header>
};

export default connect(null, {showConfiguration, fetchConfigurations, showConfigurationList})(Header);