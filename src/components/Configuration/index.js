import React from "react";
import Processor from "../ComponentList/Processor";
import VideoCard from "../ComponentList/VideoCard";
import {connect} from "react-redux";
import Schema from "../Schema";

const Configuration = ({processor, videoCard}) => {
    let Prc;
    if (processor) {
        Prc = Processor;

    } else {
        Prc = 'div'
    }

    return <div className="container">
        <div className="row">
            <Schema/>
        </div>
        <div className="row">
            <ul>
                {<Prc component={processor}/>}
                <li>
                    {/*<VideoCard component={videoCard}/>*/}
                </li>
            </ul>
        </div>
    </div>;

};

const mapStateToProps = (state) => ({
    processor: state.configuration.processor,
    videoCard: state.configuration.videoCard
});

export default connect(mapStateToProps)(Configuration);