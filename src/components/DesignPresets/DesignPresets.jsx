import React from 'react';
import PresetCard from './PresetCard';
import { useTranslation } from '../../hooks/useTranslation';
import { designPresets } from '../../utils/constants';
import './designPresets.css';

const DesignPresets = () => {
  const { t } = useTranslation();
  const presetDescriptions = t('designPresets.items', { returnObjects: true });

  return (
    <section className="design-presets section" id="design">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('designPresets.title')}</h2>
          <p className="section-description">
            {t('designPresets.description')}
          </p>
        </div>
        <div className="presets-grid">
          {designPresets.map((preset, index) => (
            <PresetCard
              key={preset.id}
              preset={preset}
              description={Array.isArray(presetDescriptions) ? presetDescriptions[index]?.description : preset.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPresets;
