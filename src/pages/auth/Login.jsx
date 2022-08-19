import React, { createRef, useMemo, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authApi from '~/api/authApi';
import images from '~/assets/images';
import { keywords } from '~/common/keywords';
import { languages } from '~/common/languages';
import { loginMethods } from '~/common/loginMethods';
import Button from '~/components/common/Button';
import CheckBox from '~/components/common/CheckBox';
import IconButton from '~/components/common/IconButton';
import InputLabel from '~/components/common/InputLabel';
import RadioGroup from '~/components/common/RadioGroup';
import Select from '~/components/common/Select';
import DialogOTP from '~/components/DialogOTP';
import { openDialog } from '~/redux/features/dialogRootSlice';
import { setLanguage, setRememberID } from '~/redux/features/userSlice';

const Login = () => {
    const { t, i18n } = useTranslation();

    const {
        language: languageStore,
        loginMethod: loginMethodStore,
        rememberID: rememberIDStore,
    } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const inputRefs = useRef([createRef(), createRef()]);

    const [account, setAccount] = useState({
        id: '',
        password: '',
    });

    const [loginMethod, setLoginMethod] = useState(loginMethodStore);

    const [languageState, setLanguageState] = useState(() => languages.find((language) => language === languageStore));

    const [rememberIDState, setRememberIDState] = useState(rememberIDStore);

    const idRules = useMemo(() => {
        return [(value) => !!value || 'EnterIdMsg'];
    }, []);

    const passwordRules = useMemo(() => {
        return [(value) => !!value || 'EnterPwMsg'];
    }, []);

    const [loading, setLoading] = useState(false);

    const [openDialogOTP, setOpenDialogOTP] = useState(false);

    const [userInfoData, setUserInfoData] = useState({});

    const handleChangeLanguage = (language) => {
        dispatch(setLanguage(language));
        setLanguageState(language);
        i18n.changeLanguage(language);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value,
        });
    };

    const handleChangeLoginMethod = (e) => {
        const method = e.target.value;
        setLoginMethod(method);
    };

    const handleSubmit = () => {
        if (loginMethod === 'otp') {
            loginOTP();
        } else if (loginMethod === 'sotp') {
            loginSOTP();
        }
    };

    const loginOTP = () => {
        setLoading(true);
        authApi
            .loginOTP({
                ...account,
                id: account.id.toLowerCase(),
            })
            .then((res) => {
                if (res.success) {
                    if (res.secucardStatus === keywords.MAX_COUNT_WRONG_SECUCARD_PW_STATUS) {
                        dispatch(
                            openDialog({
                                title: t('Error'),
                                content: t('MaxCountWrongSecucardPw'),
                                defaultClose: true,
                                backdropClose: true,
                            }),
                        );
                    } else {
                        setUserInfoData(res);
                        setOpenDialogOTP(true);
                    }
                } else {
                    handleLoginFail(res);
                }
            });
    };

    const handleLoginFail = (data) => {
        let content = '';
        if (data.nError >= data.nMaxError) {
            content = t('MaxCountWrongPw');
        } else if (data.nError) {
            content = <Trans i18nKey="WrongPw" param1={data.nError} />;
        } else {
            content = data.message;
        }

        dispatch(
            openDialog({
                title: t('Error'),
                content: content,
            }),
        );
    };

    const loginSOTP = () => {};

    const handleRememberID = (rememberCheckBox) => {
        dispatch(setRememberID(rememberCheckBox.checked));
        setRememberIDState(rememberCheckBox.checked);
    };

    const handleCloseDialogOTP = () => {
        setOpenDialogOTP(false);
    };

    const handleVerifyOtp = (otp) => {
        authApi
            .verifyOtp({
                otp: otp,
            })
            .then((res) => {
                if (res.success) {
                }
            });
    };

    const loginSuccess = () => {};

    return (
        <div className="login">
            <div className="login__form">
                <div className="login__form-group">
                    <div className="login__title">{t('Login')}</div>
                    <div className="login__input">
                        <InputLabel
                            ref={inputRefs.current[0]}
                            type="text"
                            label="account"
                            name="id"
                            value={account.id}
                            onChange={handleChange}
                            rules={idRules}
                        />
                    </div>
                    <div className="login__input">
                        <InputLabel
                            ref={inputRefs.current[1]}
                            type="password"
                            label="password"
                            name="password"
                            value={account.password}
                            onChange={handleChange}
                            rules={passwordRules}
                        />
                    </div>
                    <div className="login__method">
                        <div className="login__method__title">{t('Xác thực')}</div>
                        <div className="login__method__radio-group">
                            <RadioGroup
                                className="radio-group"
                                items={loginMethods}
                                value={loginMethod}
                                onChange={handleChangeLoginMethod}
                            />
                        </div>
                    </div>
                    <div className="login__checkbox">
                        <CheckBox checked={rememberIDState} label="SaveId" onChange={handleRememberID} />
                    </div>
                    <div className="login__checkbox">
                        <CheckBox label="CertLogin" />
                    </div>
                    <div className="login__submit">
                        <Button variant="contained" size="full" onClick={handleSubmit}>
                            {t('Login')}
                        </Button>
                    </div>
                    <div className="login__link-register">
                        <a href="https://nhwts.nhsv.vn/mo-tai-khoan/">{t('registerAccount')}</a>
                    </div>
                    <div className="login__languages">
                        {/* <Select
                            items={languages}
                            value={languageState}
                            itemText="label"
                            onClickOption={handleChangeLanguage}
                        /> */}
                        {languages.map((item) => (
                            <IconButton key={item.id} onClick={() => handleChangeLanguage(item.value)}>
                                <img src={item.icon} />
                            </IconButton>
                        ))}
                    </div>
                    <div className="login__forgot-password">
                        <Link to="/auth/reset-password">Quên mật khẩu</Link>
                    </div>
                </div>
            </div>

            <div className="login__company">
                <div className="login__company__logo">
                    <img src={images.logo} />
                </div>
                <div className="login__company__info-group">
                    <div className="login__company__info">
                        <i className="bx bxs-map"></i>
                        <p>Tầng 9, tháp Đông, Lotte Center Hà Nội, 54 Liễu Giai, Cống Vị, Ba Đình, Hà Nội</p>
                    </div>
                    <div className="login__company__info">
                        <i className="bx bxs-phone"></i>
                        <p>Hotline: 1900.1055</p>
                    </div>
                    <div className="login__company__info">
                        <i className="bx bxs-guitar-amp"></i>
                        <p>Fax: 0243.941.0248</p>
                    </div>
                    <div className="login__company__info">
                        <i className="bx bxs-envelope"></i>
                        <p>Email: support@nhsv.vn</p>
                    </div>
                </div>
            </div>

            <DialogOTP
                open={openDialogOTP}
                onClose={handleCloseDialogOTP}
                secucardKey={userInfoData.secucardKey}
                onConfirm={handleVerifyOtp}
            />
        </div>
    );
};

export default Login;
