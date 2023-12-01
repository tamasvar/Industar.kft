import React, { useState } from 'react';
import styled from 'styled-components';

const LanguageSelectContainer = styled.div`
  position: relative;
`;

const LanguageSelector = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const LanguageOptionsContainer = styled.div`
background:'transparent';
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
`;

const FlagIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 50%;
`;

const LanguageSelect = ({ languages, handleLanguageChange }) => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hu');

  
  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const selectLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    setShowLanguageOptions(false);
    handleLanguageChange(languageCode);
  };
  const flagImages = {
    en: '/images/en_icon.svg',
    hu: '/images/hu_icon.svg',
  };
  return (
    <LanguageSelectContainer>
      <LanguageSelector
        src={`/images/${selectedLanguage}_icon.svg`}
        alt={selectedLanguage}
        onClick={toggleLanguageOptions}
      />
      {showLanguageOptions && (
        <LanguageOptionsContainer>
          {languages.map((language) => (
            <FlagIcon
              key={language.code}
              src={flagImages[language.code]}
              alt={language.code}
              onClick={() => selectLanguage(language.code)}
            />
          ))}
        </LanguageOptionsContainer>
      )}
    </LanguageSelectContainer>
  );
};

export default LanguageSelect;