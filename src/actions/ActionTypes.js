import ContentInfoList from '../assets/content-info-list';

export const GET_CONTENT_LIST = () => {
  return{
    type: 'GET_CONTENT_LIST',
    contentInfoList: ContentInfoList
  }
}
