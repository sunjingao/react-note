import React from 'react'
class MainLeftComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
        this.showClick = props.showClick;
    }

    render() {
        return (
            <div className="mainLeft">
                <ul>
                    {
                        this.state.note.map(x=>{
                            return <li onClick={()=>{this.showClick(x.id)}}>{x.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default MainLeftComponents