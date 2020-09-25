const url = 'http://localhost:8000';
const devConfig = {
  baseUrl: `${url}/api/v1/list`,
};
const prodConfig = {
  baseUrl: `${window.location.origin}/api/v1/list`,
};
if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfig;
} else {
  module.exports = devConfig;
}
