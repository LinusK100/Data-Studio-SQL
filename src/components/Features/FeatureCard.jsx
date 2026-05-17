import React from 'react';
import { IconContext } from 'react-icons';
import {
  HiViewBoards,
  HiTable,
  HiCode,
  HiShieldCheck,
  HiTerminal,
  HiDatabase,
  HiFolder,
  HiColorSwatch,
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import './features.css';

const iconMap = {
  canvas: HiViewBoards,
  table: HiTable,
  code: HiCode,
  shield: HiShieldCheck,
  terminal: HiTerminal,
  database: HiDatabase,
  folder: HiFolder,
  export: HiColorSwatch,
};

const FeatureCard = ({ feature, index }) => {
  const { t } = useTranslation();
  const IconComponent = iconMap[feature.icon] || HiCode;
  const featureData = t('features.items', { returnObjects: true })?.[index] || feature;

  return (
    <div className="feature-card" style={{ '--feature-color': feature.color }}>
      <div className="feature-icon-wrapper">
        <IconContext.Provider value={{ size: '32px', color: feature.color }}>
          <IconComponent aria-hidden="true" />
        </IconContext.Provider>
      </div>
      <h3 className="feature-title">{featureData.title || feature.title}</h3>
      <p className="feature-description">{featureData.description || feature.description}</p>
    </div>
  );
};

export default FeatureCard;
