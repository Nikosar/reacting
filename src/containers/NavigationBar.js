import {fetchComponents} from "../actions";
import {connect} from "react-redux";
import NavBar from "../components/NavBar";

const mapDispatchToProps = dispatch => ({
    switchCategory: ((request, categoryName) => dispatch(fetchComponents(request, categoryName)))
});

export default connect(null, mapDispatchToProps)(NavBar);