import { combineReducers } from 'redux';
import data from '../data/node';
import {normalSet} from './helpers';
const GO_NEXT_NODE = 'goNextNode';

export const goNextNode = ()=>{
  return (dispatch,getState) =>{
    dispatch({type:GO_NEXT_NODE,payload:{key:'place',data:getState().nodes.place+1}});
  }
}














const initialState = {
  data: data,
  place:0
};
const nodes = (state = initialState, action) => {
  switch (action.type) {
    case GO_NEXT_NODE:
      return normalSet(state,action);
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  nodes
});

export default rootReducer;
