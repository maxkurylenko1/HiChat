const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const isTokenExpired = (token: string) => {
  if (token) {
    const decodedJWT = parseJwt(token);

    try {
      if (decodedJWT.exp * 1000 < Date.now()) {
        return true;
      }
    } catch {
      return true;
    }
  }

  return false;
};

export default isTokenExpired;
