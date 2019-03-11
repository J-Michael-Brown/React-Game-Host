import ContentInfoList from '../assets/content-info-list';

function GetContentListActionCreator(){
  return{
    type: 'GET_CONTENT_LIST',
    contentInfoList: ContentInfoList
  }
}

export {GetContentListActionCreator};
