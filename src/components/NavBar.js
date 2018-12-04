import React, {Component} from "react";
import {fetchComponents} from "../actions";
// import PropTypes from 'prop-types'


const NavBar = ({dispatch, switchCategory}) => {
        return <nav className="navbar">
            <div className="container align-items-center">
                <ul className="navbar-nav flex-row justify-content-around">
                    <button id="toVideoCard" type="submit" onClick={() => switchCategory('processors')}>Процессоры</button>
                    <li className="nav-item"><a className="white_link" href="#">Материнские платы</a></li>
                    <li className="nav-item">
                        <button id="toVideoCard" type="submit" onClick={() => switchCategory('videoCards')}>Видеокарты</button>
                    </li>
                    <li className="nav-item"><a className="white_link" href="#">Оперативная память</a></li>
                    <li className="nav-item"><a className="white_link" href="#">Системы охлаждения</a></li>
                    <li className="nav-item"><a className="white_link" href="#">Блоки питания</a></li>
                    <li className="nav-item"><a className="white_link" href="#">SSD</a></li>
                    <li className="nav-item"><a className="white_link" href="#">Жесткие диски</a></li>
                    <li className="nav-item"><a className="white_link" href="#">Системные блоки</a></li>
                </ul>
            </div>
        </nav>
    };

// NavBar.propTypes = {
//     switchCategory: PropTypes
// }

export default NavBar;