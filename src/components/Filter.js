import React from "react";

class Filter extends React.Component {
    render() {
        return <div className="col-lg-4">
            <div className="filter_block">
                <div className="row justify-content-around">
                    <div className="col-lg-4">
                        <h4>Фильтр</h4>
                    </div>
                    <div className="col-lg-6">
                        <button className="submit_button" type="submit">Применить</button>
                    </div>
                </div>
                <div className="row">
                    <input type="text" className="filter_search"/>
                </div>
            </div>
        </div>
    }
}

export default Filter;