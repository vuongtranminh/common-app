import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import images from '~/assets/images';
import { setMode } from '~/redux/features/themeSlice';
import Button from './common/Button';
import IconButton from './common/IconButton';

const TopNav = () => {
    const { t, i18n } = useTranslation();

    const theme = useSelector((state) => state.themeMode.theme);

    const [isLightTheme, setIsLightTheme] = useState(() => {
        return theme === 'theme-mode-dark' ? false : true;
    });

    const dispatch = useDispatch();

    const handleChangeThemeMode = () => {
        setIsLightTheme(!isLightTheme);

        if (!isLightTheme) {
            dispatch(setMode('theme-mode-light'));
        } else {
            dispatch(setMode('theme-mode-dark'));
        }
    };

    const [time, setTime] = useState('01/01/2020 - 15:00:00');
    const timerRef = useRef(null);

    useEffect(() => {
        getTimeNow();

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const getTimeNow = () => {
        let now;
        let hour = '00';
        let minute = '00';
        let second = '00';
        let date = '01';
        let month = '01';
        let year = '2022';
        timerRef.current = setInterval(() => {
            now = new Date();
            hour = now.getHours();
            minute = now.getMinutes();
            second = now.getSeconds();
            date = now.getDate();
            month = now.getMonth() + 1;
            year = now.getFullYear();

            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minute < 10) {
                minute = '0' + minute;
            }
            if (second < 10) {
                second = '0' + second;
            }
            if (date < 10) {
                date = '0' + date;
            }
            if (month < 10) {
                month = '0' + month;
            }

            if (i18n.language === 'vi') {
                setTime(`${date}/${month}/${year} - ${hour}:${minute}:${second}`);
            } else {
                setTime(`${month}/${date}/${year} - ${hour}:${minute}:${second}`);
            }
        }, 1000);
    };

    return (
        <header className="top-nav">
            <div className="top-nav__time">
                <i className="bx bxs-time"></i>
                {time}
            </div>
            <div className="top-nav__market">
                <div className="top-nav__market__item">HNX: Khớp liên tục</div>
                <div className="top-nav__market__item">HNX: Khớp liên tục</div>
                <div className="top-nav__market__item">HNX: Khớp liên tục</div>
            </div>
            <div className="top-nav__actions">
                <div className="top-nav__buttons">
                    <div className="top-nav__button top-nav__button--quick">
                        <Button variant="contained">
                            <i className="bx bxs-zap"></i>
                            Lệnh nhanh
                        </Button>
                    </div>
                    <div className="top-nav__button">
                        <IconButton full onClick={handleChangeThemeMode}>
                            {isLightTheme ? <i className="bx bxs-sun"></i> : <i className="bx bxs-moon"></i>}
                        </IconButton>
                    </div>
                    <div className="top-nav__button">
                        <IconButton full>
                            <img src={images.vi} />
                        </IconButton>
                    </div>
                    <div className="top-nav__button">
                        <IconButton full>
                            <i className="bx bxs-bell"></i>
                        </IconButton>
                    </div>
                </div>
                <div className="top-nav__account">
                    <i className="bx bx-user-circle"></i>
                    <span className="button__account--master">069c120996</span>
                    <span>-</span>
                    <span className="button__account--sub">00</span>
                </div>
            </div>
        </header>
    );
};

export default TopNav;
