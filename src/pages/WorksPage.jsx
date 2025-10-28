import React from 'react';
import Works from '@/components/Works';
import PageTransition from '@/components/PageTransition';

const WorksPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Works />
      </div>
    </PageTransition>
  );
};

export default WorksPage;