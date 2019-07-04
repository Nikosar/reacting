import React from "react";

const SortingBlock = ({count, categoryName}) => (
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-2"><h1>{categoryName}</h1></div>
            <div className="col-lg-1"/>
            <div className="col-lg-2"><h4>Найдено: {count}</h4></div>
        </div>
        <div className="container">
            <div className="row align-items-lg-center">
                <div className="col-lg-8">
                    <ul className="list-inline ">
                        <li className="list-inline-item">Сортировать по:</li>
                        <li className="list-inline-item"><a href="#">цене</a></li>
                        <li className="list-inline-item"><a href="#">популярности</a></li>
                        <li className="list-inline-item"><a href="#">passmark</a></li>
                        <li className="list-inline-item"><a href="#">passmark/цена</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default SortingBlock;