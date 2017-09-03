import { connect } from 'react-redux'
import AddIconComponents from "../components/AddIcon"
import {clickAddIcon} from "../actions/actions"

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAdd: () => {
        dispatch(clickAddIcon())
    }
});

const AddIconContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddIconComponents);

export default AddIconContainers