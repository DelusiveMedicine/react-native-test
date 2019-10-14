import {START, SUCCESS, FAIL, FETCH_PHOTOS} from '../constants';

export const fetchPhotos = () => {
  const API = 'https://api.unsplash.com/photos/?client_id=';
  const KEY =
    'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0' ||
    'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9' ||
    '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
  return dispatch => {
    dispatch({type: FETCH_PHOTOS + START});
    return fetch(API + KEY)
      .then(res => res.json())
      .then(res => {
        return dispatch({
          type: FETCH_PHOTOS + SUCCESS,
          payload: {
            photos: res,
          },
        });
      })
      .catch(err => {
        console.log('err', err);
        dispatch({
          type: FETCH_PHOTOS + FAIL,
          payload: {
            photos: err,
          },
        });
      });
  };
};
