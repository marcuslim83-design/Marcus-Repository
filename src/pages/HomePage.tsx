import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ActivationWizard from '../components/ActivationWizard';
import ComplianceRoadmap from '../components/ComplianceRoadmap';
import ResourceLibrary from '../components/ResourceLibrary';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';

const HomePage: React.FC = () => {
  return (
    <main className="max-w-[1200px] mx-auto">
      <Header />
      <Hero />
      <section className="px-margin-edge mb-stack-xl">
        <ActivationWizard />
      </section>
      <section className="px-margin-edge mb-stack-xl grid grid-cols-1 md:grid-cols-3 gap-stack-xl">
        <ComplianceRoadmap />
        <ResourceLibrary />
      </section>
      <Footer />
      <BottomNav />
    </main>
  );
};

export default HomePage;
