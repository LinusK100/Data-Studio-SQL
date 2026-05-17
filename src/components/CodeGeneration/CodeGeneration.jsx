import React from 'react';
import { IconContext } from 'react-icons';
import {
  HiTable,
  HiKey,
  HiLink,
  HiViewGrid,
  HiCheckCircle,
  HiShieldCheck,
  HiDatabase,
  HiLightningBolt,
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import './codeGeneration.css';

const languageIcons = [HiTable, HiKey, HiLink, HiViewGrid];

const CodeGeneration = () => {
  const { t } = useTranslation();

  const languages = t('codeGeneration.features.languages', { returnObjects: true });
  const benefits = t('codeGeneration.benefits.items', { returnObjects: true });

  return (
    <section className="code-generation section" id="code-generation">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('codeGeneration.title')}</h2>
          <p className="section-subtitle">{t('codeGeneration.subtitle')}</p>
          <p className="section-description">{t('codeGeneration.description')}</p>
        </div>

        <div className="code-generation-content">
          {/* SQL Building Blocks */}
          <div className="code-generation-features">
            <h3 className="code-generation-features-title">
              {t('codeGeneration.features.title')}
            </h3>
            <div className="languages-grid">
              {languages && languages.map((lang, index) => {
                const IconComponent = languageIcons[index] || HiTable;
                return (
                  <div key={index} className="language-card">
                    <div className="language-icon">
                      <IconContext.Provider value={{ size: '32px', color: 'var(--color-primary-blue)' }}>
                        <IconComponent aria-hidden="true" />
                      </IconContext.Provider>
                    </div>
                    <h4 className="language-name">{lang.name}</h4>
                    <p className="language-description">{lang.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Schema Validation + SQLite Database side-by-side */}
          <div className="cg-cards-row">
            {/* Schema Validation */}
            <div className="cg-validation">
              <div className="cg-validation-header">
                <div className="cg-validation-icon">
                  <IconContext.Provider value={{ size: '28px', color: 'var(--color-primary-blue)' }}>
                    <HiShieldCheck aria-hidden="true" />
                  </IconContext.Provider>
                </div>
                <div>
                  <h3 className="cg-sub-title">{t('codeGeneration.validation.title')}</h3>
                  <p className="cg-sub-description">{t('codeGeneration.validation.description')}</p>
                </div>
              </div>

              <div className="cg-validation-badges">
                <span className="cg-badge cg-badge-blue">
                  {t('codeGeneration.validation.rulesCount')}
                </span>
                <span className="cg-badge cg-badge-green">
                  {t('codeGeneration.validation.normalForms')}
                </span>
                <span className="cg-badge cg-badge-orange">
                  {t('codeGeneration.validation.autoFix')}
                </span>
              </div>
            </div>

            {/* SQLite Database Creation */}
            <div className="cg-database">
              <div className="cg-database-icon">
                <IconContext.Provider value={{ size: '28px', color: 'var(--color-primary-blue)' }}>
                  <HiDatabase aria-hidden="true" />
                </IconContext.Provider>
              </div>
              <div className="cg-database-content">
                <h3 className="cg-sub-title">{t('codeGeneration.database.title')}</h3>
                <p className="cg-sub-description">{t('codeGeneration.database.description')}</p>
                <div className="cg-database-features">
                  <div className="cg-db-feature">
                    <IconContext.Provider value={{ size: '18px', color: 'var(--color-accent-green)' }}>
                      <HiLightningBolt aria-hidden="true" />
                    </IconContext.Provider>
                    <span>{t('codeGeneration.database.oneClick')}</span>
                  </div>
                  <div className="cg-db-feature">
                    <IconContext.Provider value={{ size: '18px', color: 'var(--color-accent-green)' }}>
                      <HiCheckCircle aria-hidden="true" />
                    </IconContext.Provider>
                    <span>{t('codeGeneration.database.status')}</span>
                  </div>
                  <div className="cg-db-feature">
                    <IconContext.Provider value={{ size: '18px', color: 'var(--color-accent-green)' }}>
                      <HiCheckCircle aria-hidden="true" />
                    </IconContext.Provider>
                    <span>{t('codeGeneration.database.demoData')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="code-generation-benefits">
            <h3 className="code-generation-benefits-title">
              {t('codeGeneration.benefits.title')}
            </h3>
            <ul className="benefits-list">
              {benefits && benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <IconContext.Provider value={{ size: '20px', color: 'var(--color-accent-green)' }}>
                    <HiCheckCircle aria-hidden="true" />
                  </IconContext.Provider>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeGeneration;
