import {START, SUCCESS, FAIL, FETCH_PHOTOS} from '../constants';

const initState = {
  data: [],
  loading: false,
  error: false,
};

export default (photos = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_PHOTOS + START:
      return {
        loading: true,
      };

    case FETCH_PHOTOS + SUCCESS:
      return {
        data: payload.photos,
        loading: false,
      };

    case FETCH_PHOTOS + FAIL:
      return {
        data: payload.photos,
        loading: false,
        error: true,
      };
  }
  return photos;
};
