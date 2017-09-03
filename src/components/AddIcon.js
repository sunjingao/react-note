import React from 'react'

class AddComponents extends React.Component {
    constructor(props) {
        super(props);
        this.onAdd = props.onAdd;
    }

    render() {
        return (
            <div id="addIcon" className="AddIcon" onClick={()=>{
                this.onAdd();
            }}>
                <div className="AddIconHLine"></div>
                <div className="AddIconVLine"></div>
            </div>
        )
    }
}

export default AddComponents