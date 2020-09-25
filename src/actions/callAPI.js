import * as config from '../config';
import { get } from '../utils/httpUtils';
import { GET_LOCATION_DATA } from './actionTypes';

const getDataType = (data, type, value) => ({
  type,
  data,
  value,
}
);

const locationDataRequest = (type, value, data) => (dispatch) => {
  if (type === GET_LOCATION_DATA) {
    get(`${config.baseUrl}`)
      .then(response => dispatch(getDataType(response.data.data, type, value)));
  } dispatch(getDataType(data, type, value));
};

export { locationDataRequest };

