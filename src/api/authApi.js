import instance from './interceptor';

const SUFFIX = 'login';

const authApi = {
    // signup: (params) => instance.post('auth/signup', params),
    // login: (params) => instance.post('auth/login', params),
    // posts: () => instance.get('todos'),
    // verifyToken: () => instance.post('auth/verify-token'),
    loginOTP: (params) =>
        instance.post(SUFFIX, {
            action: 'login',
            id: params.id,
            password: params.password,
        }),
    verifyOtp: (params) =>
        instance.post(SUFFIX, {
            action: 'secucard',
            otp: params.otp,
        }),
};

export default authApi;
