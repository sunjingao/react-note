export default {
    setLocalStorage:(key,value)=>{
        return localStorage.setItem(key,value);
    },
    getLocalStorage:(key)=>{
        return localStorage.getItem(key);
    }
}