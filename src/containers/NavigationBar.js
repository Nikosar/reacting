import {fetchComponents} from "../actions";
import {connect} from "react-redux";
import NavBar from "../components/NavBar";

const mapDispatchToProps = dispatch => ({
    switchCategory: (componentType => dispatch(fetchComponents(componentType)))
});

export default connect(null, mapDispatchToProps)(NavBar);