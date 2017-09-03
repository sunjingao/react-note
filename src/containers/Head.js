import { connect } from 'react-redux'
import HeadComponents from "../components/Head"

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
};

const HeadContainers = connect(
    mapStateToProps
)(HeadComponents);

export default HeadContainers