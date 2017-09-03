import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeadContainers from '../containers/Head';
import MainContainers from '../containers/Main';
import AddPageContainers from '../containers/AddPage'
import AddIconContainers from '../containers/AddIcon'
class Root extends Component {
  render() {
    return (
      <div className="App">
          {/*上方head标题*/}
          <HeadContainers />
          {/*主要部分*/}
          <MainContainers />
          {/*增加符号*/}
          <AddIconContainers />
          {/*增加日志页面*/}
          {this.props.state.showAdd?<AddPageContainers />:""}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state:state
    }
};

const App = connect(
    mapStateToProps
)(Root);

export default App;
