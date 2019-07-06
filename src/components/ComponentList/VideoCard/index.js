import React from "react";
import AddComponentButton from "../AddComponentButton";

const VideoCard = props => (
    <div className="container">
        <div className="row component_block">
            <ComponentLeftInfo name={props.component.model}
                               id={props.component.id}
                               clock={props.component.clock}/>
            <ComponentRightInfo price={props.component.price}
                                benchmark={props.component.benchmark}/>
        </div>
    </div>

);

const ComponentLeftInfo = props => (
    <div className="col-lg-6">
        <a href={"#"}><h4>{props.name}</h4></a>
        <h6>{props.clock}</h6>
    </div>
);

const ComponentRightInfo = props => (
    <div className="col-lg-6">
        <h4>{props.price}</h4>
        <h4>{props.benchmark}</h4>
        <div className="row">
            <AddComponentButton/>
        </div>
    </div>
);

export default VideoCard;