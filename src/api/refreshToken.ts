import requestToApi from '../utils/requestToApi';

interface IRefreshTokenResponse {
    status: number;
    token: string;
}

const refreshToken = async (): Promise<IRefreshTokenResponse | undefined> => {
  try {
    const data = await requestToApi({
      method: 'POST',
      url: '/token',
      noAuth: true,
      config: {
        withCredentials: true,
      },
    });

    return { status: data?.status, token: data?.data?.accessToken };
  } catch (error) {
    console.log(error);

    return undefined;
  }
};

export default refreshToken;
