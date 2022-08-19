import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import images from '~/assets/images';
import sideBar from '~/common/sidebar';

const Sidebar = () => {
    const [closeNav, setCloseNav] = useState(true);

    const handleToggle = () => {
        setCloseNav(!closeNav);
    };

    return (
        <nav className={`sidebar ${closeNav && 'close'}`}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={images.logoMini} alt="" />
                    </span>

                    <div className="text logo-text">
                        <img src={images.logoCut} alt="" />
                    </div>
                </div>

                <i className={`bx bx-chevron-${closeNav ? 'right' : 'left'} toggle`} onClick={handleToggle}></i>
            </header>
            <ul className="nav-links">
                {sideBar.map((item) => (
                    <SidebarItem key={item.id} item={item} />
                ))}
                <li>
                    <div className="profile-details">
                        <div className="profile-content">
                            <img src="image/profile.jpg" alt="profileImg" />
                        </div>
                        <div className="name-job">
                            <div className="profile_name">Prem Shahi</div>
                            <div className="job">Web Desginer</div>
                        </div>
                        <i className="bx bx-log-out"></i>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

const SidebarItem = ({ item }) => {
    const [isShowSub, setIsShowSub] = useState(false);

    const handleShowSub = () => {
        setIsShowSub(!isShowSub);
    };
    if (item.subs) {
        return (
            <li className={`${isShowSub && 'showMenu'}`}>
                <div className="iocn-link" onClick={handleShowSub}>
                    <a href="#">
                        <i className={item.icon}></i>
                        <span className="link_name">{item.displayName}</span>
                    </a>
                    <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                    <li>
                        <a className="link_name" href="#">
                            {item.displayName}
                        </a>
                    </li>
                    {item.subs.map((sub, index) => (
                        <li key={index}>
                            <a href="#">{sub.displayName}</a>
                        </li>
                    ))}
                </ul>
            </li>
        );
    }

    return (
        <li>
            <a href="#">
                <i className={item.icon}></i>
                <span className="link_name">{item.displayName}</span>
            </a>
            <ul className="sub-menu blank">
                <li>
                    <a className="link_name" href="#">
                        {item.displayName}
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default Sidebar;
