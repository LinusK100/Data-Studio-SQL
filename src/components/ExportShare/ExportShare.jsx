import React from 'react';
import { IconContext } from 'react-icons';
import {
  HiPhotograph,
  HiDocument,
  HiCode,
  HiDatabase,
  HiArchive,
  HiTable,
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import { exportFormats } from '../../utils/constants';
import './exportShare.css';

const exportIconMap = {
  photograph: HiPhotograph,
  document: HiDocument,
  code: HiCode,
  database: HiDatabase,
  archive: HiArchive,
  table: HiTable,
};

const exportColors = [
  '#007AFF',
  '#FF3B30',
  '#FF9500',
  '#34C759',
  '#5856D6',
  '#5AC8FA',
];

const ExportShare = () => {
  const { t } = useTranslation();

  return (
    <section className="export-share section" id="export">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('exportShare.title')}</h2>
          <p className="section-subtitle">{t('exportShare.subtitle')}</p>
          <p className="section-description">{t('exportShare.description')}</p>
        </div>

        <div className="es-content">
          {/* Export Formats */}
          <div className="es-formats-section">
            <h3 className="es-sub-title">{t('exportShare.formats.title')}</h3>
            <div className="es-formats-grid">
              {exportFormats.map((fmt, index) => {
                const IconComponent = exportIconMap[fmt.icon] || HiDocument;
                const color = exportColors[index % exportColors.length];
                return (
                  <div key={fmt.id} className="es-format-card" style={{ '--es-color': color }}>
                    <div className="es-format-icon">
                      <IconContext.Provider value={{ size: '24px', color }}>
                        <IconComponent aria-hidden="true" />
                      </IconContext.Provider>
                    </div>
                    <span className="es-format-name">{fmt.format}</span>
                    <span className="es-format-description">{fmt.description}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExportShare;
