import {combineReducers} from 'redux';
import fetchPhotos from './photos';

export default combineReducers({
  photos: fetchPhotos,
});
