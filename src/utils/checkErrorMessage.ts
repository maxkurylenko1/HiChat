export const checkErrorMessage = (error: any) => (typeof error.response.data !== 'string')
  ? error.response.data.message : error.response.data;
