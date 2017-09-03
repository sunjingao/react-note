import reducerType from "../constants/reducerType"
// 增加日志
export const add = (title,content)=>{
    return {
        type:reducerType.ADD,
        title,
        content
    }
};
// 展示日志
export const show = (id)=>{
    return {
        type:reducerType.SHOW,
        id
    }
};
// 点击增加符号
export const clickAddIcon = (title,content) => {
    return {
        type: reducerType.SHOW_ADD_PAGE
    }
};
// 增加日志页面中点击关闭
export const closeAdd = () => {
    return {
        type: reducerType.CLOSE_ADD
    }
};
// 增加日志页面点击保存
export const saveAdd = (title,content) => {
    return {
        type: reducerType.SAVE_ADD,
        title,
        content
    }
};