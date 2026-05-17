import React from 'react';
import { IconContext } from 'react-icons';
import {
  HiAcademicCap,
  HiCode,
  HiBookOpen,
  HiBriefcase,
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import { useCases } from '../../utils/constants';
import './useCases.css';

const iconMap = {
  'academic-cap': HiAcademicCap,
  'code': HiCode,
  'book-open': HiBookOpen,
  'briefcase': HiBriefcase,
};

const UseCases = () => {
  const { t } = useTranslation();
  const useCasesData = t('useCases.items', { returnObjects: true }) || useCases;

  return (
    <section className="use-cases section" id="use-cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('useCases.title')}</h2>
          <p className="section-description">
            {t('useCases.description')}
          </p>
        </div>
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => {
            const IconComponent = iconMap[useCase.icon] || HiAcademicCap;
            const useCaseData = useCasesData[index] || useCase;
            return (
              <div key={useCase.id} className="use-case-card">
                <div className="use-case-icon-wrapper">
                  <IconContext.Provider value={{ size: '48px', color: 'var(--color-primary-blue)' }}>
                    <IconComponent aria-hidden="true" />
                  </IconContext.Provider>
                </div>
                <h3 className="use-case-title">{useCaseData.title || useCase.title}</h3>
                <p className="use-case-description">{useCaseData.description || useCase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
