import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslatorForLanguage } from '../translations';
import LanguagesContext from '../contexts/LanguagesContext';

const SettingsPage = () => {
  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const { currentLanguage, setCurrentLanguage } = useContext(LanguagesContext)
  const t = getTranslatorForLanguage(currentLanguage);

  return (
    <div>
      <Link to="/">{t('go_back')}</Link>
      <h1>{t('settings')}</h1>
      <label htmlFor="language">{t('app_lang')} : </label>
      <select
        id="language"
        name="language"
        defaultValue={currentLanguage} // TODO: get the default language from context
        onChange={(event) => {
          const newLang = event.target.value;
          console.log(newLang);
          setCurrentLanguage(newLang)
        }}
      >
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
    </div>
  );
};

export default SettingsPage;
