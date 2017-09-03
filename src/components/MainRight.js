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
                    this.props.state.note.map(x=>{
                        if(x.id === this.props.state.showEdit){
                            return <div>标题是{x.title}内容是{x.content}</div>;
                        }
                    })
                }
            </div>
        )
    }
}

export default MainRightComponents