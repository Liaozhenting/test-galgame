// export function createAction(type,payload){

// }

export const normalSet = (state, action) => {
  let payload = action.payload;
  if(payload && payload.key){
    let key = payload.key;
    let data = payload.data;
    return Object.assign({},state,{[key]:data});
  }
  return state;
};
