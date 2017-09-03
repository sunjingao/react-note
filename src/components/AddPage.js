import React from 'react'
class AddPageComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            content:""
        };
        this.onCloseClickItem = props.onCloseClickItem;
        this.onSaveClickItem = props.onSaveClickItem;

        this.changeTitle = this.changeTitle.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    changeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div className="addPage">
                <div className="addPageTitle">
                    <span className="addPageTitleTitle">增加内容</span>
                    <div className="headImg" onClick={()=>{
                        this.onCloseClickItem(123)
                    }}>
                        <div className="headImgHLine"></div>
                        <div className="headImgVLine"></div>
                    </div>
                </div>
                <div className="addPageContent">
                    <input className="addPageContentTitle" onChange={this.changeTitle} value={this.state.title} placeholder="请输入标题" />
                    <textarea className="addPageContentContent" onChange={this.changeContent} value={this.state.content} placeholder="请输入内容" />
                    <div className="savaAdd">
                        <button className="savaAddBtn" onClick={()=>{
                            this.onSaveClickItem(this.state.title,this.state.content)
                        }}>保 存</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPageComponents