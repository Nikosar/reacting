import {connect} from "react-redux";
import React from "react";
import {fetchComponents} from "../../services/component/actions";
import {showComponentList} from "../../services/content/actions";
import PropTypes from 'prop-types';
import './style.css'
import {MOTHERBOARDS, PROCESSORS, RAMS, SSDS, VIDEO_CARDS} from "../constants";

export const Schema = ({fetchComponents, showComponentList}) => {
    return (
        <svg id="board" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401 453" width="100%" height="600px">
            <rect id="motherboard" className="cls-1" x="0.5" y="0.5" width="400" height="452" onClick={() => {
                fetchComponents(MOTHERBOARDS);
            }}/>
            <g id="processor" onClick={() => {
                fetchComponents(PROCESSORS);
            }}>
                <rect className="cls-2" x="65.5" y="92.5" width="92.5" height="93.8" rx="8.31" ry="8.31"/>
                <rect className="cls-3" x="65.5" y="92.5" width="92.5" height="93.8" rx="8.31" ry="8.31"/>
                <text className="cls-8" transform="translate(75.25 142.58)">I7-9900X</text>
            </g>
            <g id="memory" onClick={() => {
                fetchComponents(RAMS);
            }}>
                <rect className="cls-4" x="240.5" y="51.5" width="16" height="169"/>
                <line className="cls-2" x1="248.5" y1="59.5" x2="248.5" y2="211.5"/>
                <rect className="cls-4" x="266.5" y="51.5" width="16" height="169"/>
                <line className="cls-2" x1="274.5" y1="59.5" x2="274.5" y2="211.5"/>
                <rect className="cls-4" x="289.5" y="51.5" width="16" height="169"/>
                <line className="cls-2" x1="297.5" y1="59.5" x2="297.5" y2="211.5"/>
                <rect className="cls-4" x="315.5" y="51.5" width="16" height="169"/>
                <line className="cls-2" x1="323.5" y1="59.5" x2="323.5" y2="211.5"/>
            </g>
            <g id="videocard" onClick={() => {
                fetchComponents(VIDEO_CARDS)
            }}>
                <text className="cls-8" transform="translate(69.25 244.58)">RTX 2080ti</text>
                <g>
                    <rect className="cls-2" x="25.5" y="257.5" width="168" height="16"/>
                    <rect className="cls-5" x="25.5" y="257.5" width="168" height="16"/>
                </g>
                <line className="cls-2" x1="37.5" y1="265.5" x2="146.5" y2="265.5"/>
                <line className="cls-2" x1="160.5" y1="265.5" x2="180.5" y2="265.5"/>
                <g>
                    <rect className="cls-2" x="25.5" y="340.5" width="168" height="16"/>
                    <rect className="cls-5" x="25.5" y="340.5" width="168" height="16"/>
                </g>
                <line className="cls-2" x1="37.5" y1="348.5" x2="146.5" y2="348.5"/>
                <line className="cls-2" x1="160.5" y1="348.5" x2="180.5" y2="348.5"/>
            </g>
            <g id="power">
                <g id="motherboard_power">
                    {/*TODO fix*/}
                    <rect className="cls-6" x="369.5" y="152.5" width="14.17" height="141.73"/>
                    <line className="cls-6" x1="369.5" y1="282.42" x2="383.67" y2="282.42"/>
                    <line className="cls-6" x1="369.5" y1="270.61" x2="383.67" y2="270.61"/>
                    <line className="cls-6" x1="369.5" y1="258.8" x2="383.67" y2="258.8"/>
                    <line className="cls-6" x1="369.5" y1="246.99" x2="383.67" y2="246.99"/>
                    <line className="cls-6" x1="369.5" y1="235.18" x2="383.67" y2="235.18"/>
                    <line className="cls-6" x1="369.5" y1="223.37" x2="383.67" y2="223.37"/>
                    <line className="cls-6" x1="369.5" y1="211.56" x2="383.67" y2="211.56"/>
                    <line className="cls-6" x1="369.5" y1="199.74" x2="383.67" y2="199.74"/>
                    <line className="cls-6" x1="369.5" y1="187.93" x2="383.67" y2="187.93"/>
                    <line className="cls-6" x1="369.5" y1="176.12" x2="383.67" y2="176.12"/>
                    <line className="cls-6" x1="369.5" y1="164.31" x2="383.67" y2="164.31"/>
                    <line className="cls-6" x1="376.59" y1="152.5" x2="376.59" y2="294.23"/>
                </g>
                <g id="processor_power">
                    <rect className="cls-6" x="85" y="52" width="28.35" height="14.17"/>
                    <line className="cls-6" x1="85" y1="59.09" x2="113.35" y2="59.09"/>
                    <line className="cls-6" x1="106.26" y1="52" x2="106.26" y2="66.17"/>
                    <line className="cls-6" x1="99.17" y1="52" x2="99.17" y2="66.17"/>
                    <line className="cls-6" x1="92.09" y1="52" x2="92.09" y2="66.17"/>
                </g>
            </g>
            <g id="sata" onClick={() => {
                fetchComponents(SSDS)
            }}>

                <polygon className="cls-7"
                         points="333 406 365.37 406 365.37 403.57 367 403.57 367 392.46 365.37 392.46 365.37 391.28 363.86 391.28 363.86 389 335.62 389 335.62 391.28 333 391.28 333 406"/>
                <polyline className="cls-6" points="361.25 396.58 339.28 396.58 339.28 402.47"/>
                <polygon className="cls-7"
                         points="333 373 365.37 373 365.37 370.57 367 370.57 367 359.46 365.37 359.46 365.37 358.28 363.86 358.28 363.86 356 335.62 356 335.62 358.28 333 358.28 333 373"/>
                <polyline className="cls-6" points="361.25 363.58 339.28 363.58 339.28 369.47"/>
                <polygon className="cls-7"
                         points="290 406 322.37 406 322.37 403.57 324 403.57 324 392.46 322.37 392.46 322.37 391.28 320.86 391.28 320.86 389 292.62 389 292.62 391.28 290 391.28 290 406"/>
                <polyline className="cls-6" points="318.25 396.58 296.28 396.58 296.28 402.47"/>
                <polygon className="cls-7"
                         points="290 373 322.37 373 322.37 370.57 324 370.57 324 359.46 322.37 359.46 322.37 358.28 320.86 358.28 320.86 356 292.62 356 292.62 358.28 290 358.28 290 373"/>
                <polyline className="cls-6" points="318.25 363.58 296.28 363.58 296.28 369.47"/>
            </g>

        </svg>

    )
};

Schema.propTypes = {
    fetchComponents: PropTypes.func.isRequired,
    showComponentList: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    fetchComponents: ((request, categoryName) => dispatch(fetchComponents(request, categoryName))),
    showComponentList: (() => dispatch(showComponentList()))
});

export default connect(null, mapDispatchToProps)(Schema);