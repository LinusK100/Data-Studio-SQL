import React from 'react';
import { IconContext } from 'react-icons';
import {
  HiViewGrid,
  HiArrowsExpand,
  HiLightningBolt,
  HiAnnotation,
  HiSwitchHorizontal,
  HiTemplate,
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import {
  canvasEntityTypes,
  canvasLayoutAlgorithms,
  canvasTools,
} from '../../utils/constants';
import './canvas.css';

const entityColors = canvasEntityTypes.map((e) => e.color);

const toolIconMap = {
  zoom: HiArrowsExpand,
  grid: HiViewGrid,
  layers: HiTemplate,
  lightning: HiLightningBolt,
  annotation: HiAnnotation,
  'view-list': HiSwitchHorizontal,
};

const Canvas = () => {
  const { t } = useTranslation();

  const entityTypeItems = t('canvas.entityTypes.items', { returnObjects: true });
  const relationshipItems = t('canvas.relationships.items', { returnObjects: true });

  return (
    <section className="canvas-section section" id="canvas">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('canvas.title')}</h2>
          <p className="section-subtitle">{t('canvas.subtitle')}</p>
          <p className="section-description">{t('canvas.description')}</p>
        </div>

        <div className="canvas-content">
          {/* Entity Types + Relationships */}
          <div className="canvas-top-grid">
            {/* Entity Types */}
            <div className="canvas-block">
              <h3 className="canvas-block-title">{t('canvas.entityTypes.title')}</h3>
              <p className="canvas-block-description">{t('canvas.entityTypes.description')}</p>
              <div className="entity-types-list">
                {Array.isArray(entityTypeItems) && entityTypeItems.map((type, index) => (
                  <div key={index} className="entity-type-pill" style={{ '--entity-color': entityColors[index] }}>
                    <span className="entity-type-dot" />
                    <div>
                      <strong className="entity-type-name">{type.name}</strong>
                      <span className="entity-type-desc">{type.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relationships */}
            <div className="canvas-block">
              <h3 className="canvas-block-title">{t('canvas.relationships.title')}</h3>
              <p className="canvas-block-description">{t('canvas.relationships.description')}</p>
              <div className="relationships-list">
                {Array.isArray(relationshipItems) && relationshipItems.map((rel, index) => (
                  <div key={index} className="relationship-row">
                    <div className="relationship-badge">{rel.name}</div>
                    <div className="relationship-info">
                      <span className="relationship-desc-label">{rel.description}</span>
                      <span className="relationship-example">{rel.example}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Layout Algorithms + Canvas Tools (merged) */}
          <div className="canvas-tools-section">
            <h3 className="canvas-block-title canvas-block-title-center">{t('canvas.tools.title')}</h3>
            <p className="canvas-block-description canvas-block-description-center">{t('canvas.tools.description')}</p>
            <div className="layout-algorithms-grid">
              {canvasLayoutAlgorithms.map((algo) => (
                <div key={algo.id} className="layout-algorithm-card">
                  <span className="layout-algo-name">{algo.name}</span>
                  <span className="layout-algo-desc">{algo.description}</span>
                </div>
              ))}
            </div>
            <div className="canvas-tools-grid">
              {canvasTools.map((tool) => {
                const IconComponent = toolIconMap[tool.icon] || HiViewGrid;
                return (
                  <div key={tool.id} className="canvas-tool-chip">
                    <IconContext.Provider value={{ size: '18px', color: 'var(--color-primary-blue)' }}>
                      <IconComponent aria-hidden="true" />
                    </IconContext.Provider>
                    <span>{tool.name}</span>
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

export default Canvas;
