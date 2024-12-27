import React from 'react';
import { useTranslation } from 'react-i18next';
import "./header.css";
import logo from '../assets/oso_madroño_logo.webp'; 

export default function Header() {
    const { t } = useTranslation();
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-wrapper">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>
            </div>
            <div className="name">
                <h1>{t('web_name')}</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <LanguageSelector />
        </div>
    );
}

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="language-selector">
            <select onChange={changeLanguage} defaultValue={i18n.language.toUpperCase()} className="language-select">
                <option value="es">🇪🇸 ES</option>
                <option value="en">🇬🇧 EN</option>
            </select>
        </div>
    );
}