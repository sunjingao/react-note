import { connect } from 'react-redux'
import MainLeftComponents from "../components/MainLeft"
import {show} from "../actions/actions"

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showClick:(id)=>{
            dispatch(show(id))
        }
    }
};
const MainLeftContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainLeftComponents);

export default MainLeftContainers