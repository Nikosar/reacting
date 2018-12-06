import {connect} from "react-redux";
import SortingBlock from "../components/SortingBlock";


const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps, null)(SortingBlock);