function ContentInfoListReducer(state = {}, action){
  let newState;
  switch (action.type) {
    case 'GET_CONTENT_LIST':
      newState = {...state, contentInfoList: action.contentInfoList};
      return newState;
    default:
      return state;
  }
}

export default ContentInfoListReducer;
