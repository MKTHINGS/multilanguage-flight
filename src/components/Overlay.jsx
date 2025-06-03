import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { useLanguage } from "../translations/LanguageContext";
import { useEffect } from "react";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const { t } = useLanguage();
  
  // Add redirect functionality when end becomes true
  useEffect(() => {
    if (end) {
      const redirectTimer = setTimeout(() => {
        window.location.href = 'https://github.com/mkthings';
      }, 5000); // Redirect after 5 seconds
      
      return () => clearTimeout(redirectTimer); // Cleanup on unmount
    }
  }, [end]);
  
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            {t('overlay.logo')}
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">{t('overlay.scroll')}</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            {t('overlay.explore')}
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">{t('overlay.outro')}<br /><br />{t('overlay.github')}</p>
      </div>
    </div>
  );
};