function contentInfoListReducer(state = {}, action){
  let newContentInfoList;
  switch (action.type) {
    case 'GET_CONTENT_LIST':
      newContentInfoList = action.contentInfoList;
      return newContentInfoList;
    default:
      return state;
  }
}

export default contentInfoListReducer;
