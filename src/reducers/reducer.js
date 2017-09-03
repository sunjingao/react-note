import reducerType from "../constants/reducerType"
import utils from "../utils/utils"
import localData from "../constants/localData"
let id = 0;
let initState = {
    //是否展示添加页面
    showAdd:false,
    //是否展示编辑部分
    showEdit:-1,
    //日志记录部分
    note:[]
};

let reducers = (state=initState,action)=>{
  switch (action.type){
      case reducerType.ADD:
          return state;
      case reducerType.SHOW:
          return Object.assign({},state,{showEdit:action.id});
      case reducerType.CLOSE_ADD:
          return Object.assign({},state,{showAdd:false});
      case reducerType.SAVE_ADD:
          var saveObj = {
              id:id++,
              title:action.title,
              content:action.content
          };
          state.note.push(saveObj);
          let saveStr = JSON.stringify(state.note);
          utils.setLocalStorage(localData.note,saveStr);
          return Object.assign({},state,{
              showAdd:false
          });
      case reducerType.SHOW_ADD_PAGE:
          return Object.assign({},state,{showAdd:true})
      default:
          let localStr = utils.getLocalStorage(localData.note);
          if(localStr){
              let localArr = JSON.parse(localStr);
              id = localArr.length;
              state.note = localArr;
              return Object.assign({},state);
          }else{
              return state;
          }
  }
};

export default reducers;