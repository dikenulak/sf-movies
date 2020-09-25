import axios from 'axios';

const get = async (url) => {
  try {
    return axios.get(url, {
      headers: {
        Accept: 'application/json',
      },
    });
  } catch (error) {
    return error;
  }
};

export { get };
