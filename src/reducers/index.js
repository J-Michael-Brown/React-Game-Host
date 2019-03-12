import contentInfoListReducer from './content-info-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contentInfoList: contentInfoListReducer
});

export default rootReducer;
