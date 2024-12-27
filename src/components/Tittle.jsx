import { useTranslation } from 'react-i18next';
import "./tittle.css";

export default function Tittle() {
    const { t } = useTranslation();

    return (
        <div className="tittle">
            <h2>{t('description.tittle')}</h2>
            <h3>{t('description.subtittle')}</h3>
            <div className="row warning">
                <div className="warning-logo">
                    <span role="img" aria-label="warning" style={{ fontSize: '16px', color: 'yellow' }}>⚠️</span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: t('description.warning') }} />
            </div>
            <div className="room_info">
                <div className="row room">
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
                            <path d="M17 6a2 2 0 0 1 2 1.85v8.91l.24.24H24v-3h-3a1 1 0 0 1-.98-1.2l.03-.12 2-6a1 1 0 0 1 .83-.67L23 6h4a1 1 0 0 1 .9.58l.05.1 2 6a1 1 0 0 1-.83 1.31L29 14h-3v3h5a1 1 0 0 1 1 .88V30h-2v-3H20v3h-2v-3H2v3H0V19a3 3 0 0 1 1-2.24V8a2 2 0 0 1 1.85-2H3zm13 13H20v6h10zm-13-1H3a1 1 0 0 0-1 .88V25h16v-6a1 1 0 0 0-.77-.97l-.11-.02zm8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17 8H3v8h2v-3a2 2 0 0 1 1.85-2H13a2 2 0 0 1 2 1.85V16h2zm-4 5H7v3h6zm13.28-5h-2.56l-1.33 4h5.22z"></path>
                        </svg>
                    </div>
                    <div className="text">
                        <h3>{t('description.room_tittle')}</h3>
                        <p>{t('description.room_subtittle')}</p>
                    </div>
                </div>
                <div className="row shared_areas">
                    <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
                        <path d="M31.7 15.3 29 12.58 18.12 1.7a3.07 3.07 0 0 0-4.24 0L3 12.59l-2.7 2.7 1.4 1.42L3 15.4V28a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V15.41l1.3 1.3ZM9.09 28A7 7 0 0 1 15 22.08v-2.3a2.5 2.5 0 1 1 2 0v2.3A7 7 0 0 1 22.92 28ZM27 28h-2.08a9.01 9.01 0 0 0-5.67-7.4 4.5 4.5 0 1 0-6.5 0A9.01 9.01 0 0 0 7.08 28H5V13.41L15.3 3.12a1 1 0 0 1 1.4 0L27 13.42Z"></path>
                    </svg>
                    </div>
                    <div className="text">
                        <h3>{t('description.shared_tittle')}</h3>
                        <p>{t('description.shared_subtittle')}</p>
                    </div>
                </div>
                <div className="row bathroom">
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
                            <path d="M7 1a3 3 0 0 0-3 2.82V31h2V4a1 1 0 0 1 .88-1H18a1 1 0 0 1 1 .88V5h-5a1 1 0 0 0-1 .88V9h-3v2h19V9h-2V6a1 1 0 0 0-.88-1H21V4a3 3 0 0 0-2.82-3H7zm13 28a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM15 7h10v2H15V7z"></path>
                        </svg>
                    </div>
                    <div className="text">
                        <h3>{t('description.bathroom_tittle')}</h3>
                        <p>{t('description.bathroom_subtittle')}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}