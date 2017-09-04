import React from 'react'

class MainRightComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
    }

    render() {
        return (
            <div className="mainRight">
                {
                    this.props.state.note.map(x => {
                        if (x.id === this.props.state.showEdit) {
                            return (
                                <div className="mainRightDiv">

                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myModalLabel">
                                            <span>工作日志显示</span>
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <label for="firstname" className="col-sm-2 control-label">标题</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="firstname"
                                                           value={x.title} readOnly/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="lastname" className="col-sm-2 control-label">内容</label>
                                                <div className="col-sm-10">
                                                    <textarea className="form-control" rows="5" value={x.content} readOnly />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div> );
                            // return <div>标题是{x.title}内容是{x.content}</div>;
                        }
                    })
                }
            </div>
        )
    }
}

export default MainRightComponents