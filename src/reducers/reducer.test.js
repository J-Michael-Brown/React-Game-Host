import rootReducer from './index';
import types from '../actions/index';
import ContentInfoList from '../assets/content-info-list';
const initialState = {};
let action;
describe('rootReducer', ()=> {
  describe('GET_CONTENT_LIST', ()=>{
    it('should call for a content list and recieve [an immediate] object list of content info, then return the new state', () => {
      action = types.GET_CONTENT_LIST();
      expect(rootReducer(initialState, action)).toEqual({contentInfoList: ContentInfoList});
    });
  });

});
