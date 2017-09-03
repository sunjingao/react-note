import { connect } from 'react-redux'
import MainComponents from "../components/Main"

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
};

const MainContainers = connect(
    mapStateToProps
)(MainComponents);

export default MainContainers