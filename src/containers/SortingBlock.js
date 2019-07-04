import {connect} from "react-redux";
import SortingBlock from "../components/SortingBlock";


const mapStateToProps = (state) => ({
    count: state.count,
    categoryName: state.categoryName
});

export default connect(mapStateToProps, null)(SortingBlock);