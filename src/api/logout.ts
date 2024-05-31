import requestToApi from '../utils/requestToApi';

const logout = async (): Promise<number> => {
  try {
    const status = await requestToApi({
      method: 'DELETE',
      url: '/logout',
      noAuth: true,
      config: {
        withCredentials: true,
      },
    });

    console.log(status);

    if (typeof status === 'number') {
      return status;
    }

    return 500;
  } catch (error) {
    console.log(error);

    return 500;
  }
};

export default logout;
