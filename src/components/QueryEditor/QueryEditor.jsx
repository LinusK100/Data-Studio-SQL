import React from 'react';
import { IconContext } from 'react-icons';
import {
  HiChip,
  HiCollection,
  HiLightBulb,
  HiAdjustments,
  HiClock,
  HiTable,
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import { queryFeatures } from '../../utils/constants';
import './queryEditor.css';

const iconMap = {
  chip: HiChip,
  collection: HiCollection,
  'light-bulb': HiLightBulb,
  adjustments: HiAdjustments,
  clock: HiClock,
  table: HiTable,
};

const accentColors = [
  '#007AFF',
  '#5856D6',
  '#AF52DE',
  '#FF9500',
  '#34C759',
  '#5AC8FA',
];

const QueryEditor = () => {
  const { t } = useTranslation();

  return (
    <section className="query-editor section" id="query-editor">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('queryEditor.title')}</h2>
          <p className="section-subtitle">{t('queryEditor.subtitle')}</p>
          <p className="section-description">{t('queryEditor.description')}</p>
        </div>

        {/* Feature Cards */}
        <div className="qe-features-grid">
          {queryFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || HiCollection;
            const color = accentColors[index % accentColors.length];
            return (
              <div key={feature.id} className="qe-feature-card" style={{ '--qe-color': color }}>
                <div className="qe-feature-icon">
                  <IconContext.Provider value={{ size: '28px', color }}>
                    <IconComponent aria-hidden="true" />
                  </IconContext.Provider>
                </div>
                <h3 className="qe-feature-name">{feature.name}</h3>
                <p className="qe-feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Results highlight */}
        <div className="qe-results-block">
          <div className="qe-results-icon">
            <IconContext.Provider value={{ size: '28px', color: 'var(--color-primary-blue)' }}>
              <HiTable aria-hidden="true" />
            </IconContext.Provider>
          </div>
          <div className="qe-results-content">
            <h3 className="qe-results-title">{t('queryEditor.results.title')}</h3>
            <p className="qe-results-description">{t('queryEditor.results.description')}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QueryEditor;
