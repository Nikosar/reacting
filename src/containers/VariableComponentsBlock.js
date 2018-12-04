import ComponentsBlock from "../components/ComponetsBlock";
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    components: state.components,
    entityName: state.entityName
});

export default connect(mapStateToProps)(ComponentsBlock);