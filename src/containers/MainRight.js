import { connect } from 'react-redux'
import MainRightComponents from "../components/MainRight"

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const MainRightContainers = connect(
    mapStateToProps
)(MainRightComponents);

export default MainRightContainers