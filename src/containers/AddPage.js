import { connect } from 'react-redux'
import AddPageComponents from "../components/AddPage"
import {closeAdd,saveAdd} from "../actions/actions"

const mapStateToProps = (state) => ({
    id: state.id,
    showAdd:state.showAdd
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCloseClickItem: (id) => {
        dispatch(closeAdd())
    },
    onSaveClickItem: (title,content) => {
        if( !( title.trim() && content.trim() ) ){
            alert("请输入数据");
            return false;
        }
        dispatch(saveAdd(title,content))
    }
});

const AddPageContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPageComponents)

export default AddPageContainers