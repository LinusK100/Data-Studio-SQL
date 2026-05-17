import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Canvas from '../components/Canvas/Canvas';
import CodeGeneration from '../components/CodeGeneration/CodeGeneration';
import QueryEditor from '../components/QueryEditor/QueryEditor';
import DesignPresets from '../components/DesignPresets/DesignPresets';
import ExportShare from '../components/ExportShare/ExportShare';
import Screenshots from '../components/Screenshots/Screenshots';
import UseCases from '../components/UseCases/UseCases';
import Vorteile from '../components/Vorteile/Vorteile';
import Download from '../components/Download/Download';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section, .hero');
    sections.forEach((section) => {
      section.classList.add('fade-in');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Canvas />
      <CodeGeneration />
      <QueryEditor />
      <DesignPresets />
      <ExportShare />
      <Screenshots />
      <UseCases />
      <Vorteile />
      <Download />
    </>
  );
};

export default Home;
