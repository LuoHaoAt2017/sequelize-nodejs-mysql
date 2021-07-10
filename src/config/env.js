let baseUrl;
if (process.env.NODE_ENV === 'production') {
  baseUrl = '';
} else {
  baseUrl = '/apis';
}

export {
  baseUrl
}