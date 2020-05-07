import PropTypes from 'prop-types'
import React from "react";
import ComponentProperties from "../ComponentProperties";

const Component = ({component, onClick, buttonName}) => {

    const price = component.lastMinPrice;

    return <div className="container">
        <div className="row component_block">
            <div className="col-2 col-md-3 col-lg-2 col-sm-4">
                <svg viewBox="0 0 100 100">
                    <g>
                        <rect className="cls-2" x="5" y="5" width="90" height="90" rx="10" ry="10"/>
                        <rect className="cls-3" x="5" y="5" width="90" height="90" rx="10" ry="10"/>
                        <text className="cls-10" transform="translate(50 40)">{component.producer.name}</text>
                        <text className="cls-10" transform="translate(50 60)">{component.model}</text>
                    </g>
                </svg>
            </div>
            <div className="col-6 col-lg-6 col-md-6 col-sm-8">
                <ComponentProperties component={component}/>
            </div>

            <div className="col-3 col-lg-4 col-md-3 col-sm-12">
                <h5>{price && price + " р."}</h5>
                <button className="submit_button" type="button"
                        onClick={() => onClick()}>{buttonName}
                </button>
            </div>
        </div>
    </div>
};

Component.propTypes = {
    component: PropTypes.object.isRequired
};


export default (Component);

