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

           <div className="addPage"  >

                <div className="modal-content" >

                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                            增加工作日志
                        </h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label for="firstname" className="col-sm-2 control-label">标题</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="title" onChange={this.changeTitle} value={this.state.title}
                                           placeholder="请输入标题" autofocus />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="lastname" className="col-sm-2 control-label">内容</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="5"  onChange={this.changeContent} value={this.state.content}
                                              placeholder="请输入内容" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={()=>{
                            this.onCloseClickItem("")
                        }}>关闭
                        </button>
                        <button type="button" className="btn btn-primary" onClick={()=>{
                            this.onSaveClickItem(this.state.title,this.state.content)
                        }}>
                            提交
                        </button>
                    </div>

                </div>

           </div>

        )
    }
}

export default AddPageComponents