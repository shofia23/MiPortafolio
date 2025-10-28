import React from 'react';
import About from '@/components/About';
import Concepts from '@/components/Concepts';
import PageTransition from '@/components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <About />
        <Concepts />
      </div>
    </PageTransition>
  );
};

export default AboutPage;