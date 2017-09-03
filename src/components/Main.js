import React from 'react'
import MainLeft  from "../containers/MainLeft"
import MainRight from "../containers/MainRight"
class HeadComponents extends React.Component {
    render() {
        return (
            <div className="main">
                <MainLeft />
                <MainRight />
            </div>
        )
    }
}

export default HeadComponents