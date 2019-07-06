import React, {Component} from "react";

export class Header extends Component {
    render() {
        return <header className="navbar">
            <div className="container align-items-center">

                <a className="navbar-brand" href="#"><span className="LOGO">LOGO</span></a>
                <ul className="navbar-nav flex-row ml-md-auto">
                    <li className="nav-item"><input type="text" className="top_search"/></li>
                    <li className="nav-item"><a className="white_link" href="#">Конфигурации</a></li>
                    <li className="nav-item"><a className="white_link" href="#">Nikosar</a></li>
                </ul>
            </div>
        </header>
    }
}

export default Header;