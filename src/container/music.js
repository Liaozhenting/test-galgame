import React, { Component } from 'react';
import { connect } from 'react-redux';
class Scene extends Component {
  componentDidMount(){

  }
  render() {
    return <div>
      <div>asdfasdfasdfsadfasdfasdf</div>
    </div>;
  }
}

const mapStateToProps = (state) =>{
  return {
    posts:state.posts
  }
}

export default connect(mapStateToProps)(Scene);