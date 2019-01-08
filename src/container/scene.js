import React, { Component } from 'react';
import { connect } from 'react-redux';
import {goNextNode} from '../reducers/index';
class Scene extends Component {
  componentDidMount(){

  }
  goNext(){
    this.props.dispatch(goNextNode());
  }
  render() {
    let data = this.props.data;
    let place = this.props.place;

    return <div>
      <div onClick={this.goNext.bind(this)}>{data[place].text}</div>
    </div>;
  }

}

const mapStateToProps = (state) =>{
  return {
    data:state.nodes.data,
    place:state.nodes.place
  }
}

export default connect(mapStateToProps)(Scene);