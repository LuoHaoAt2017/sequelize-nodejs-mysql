let baseUrl: string;
if (process.env.NODE_ENV === 'production') {
  baseUrl = '';
} else {
  baseUrl = '/apis';
}

export {
  baseUrl
}