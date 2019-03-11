import ContentInfoListReducer from './ContentInfoListReducer';
import {GetContentListActionCreator}  from '../actions';
import ContentInfoList from '../assets/content-info-list';
const initialState = {};
let action;
describe('GET_CONTENT_LIST', ()=>{
  it('should call for a content list and recieve [an immediate] object list of content info, then return the new state', () => {
    action = GetContentListActionCreator();
    expect(ContentInfoListReducer(initialState, action)).toEqual({contentInfoList: ContentInfoList});
  });
});
