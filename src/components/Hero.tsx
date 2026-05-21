import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-end mb-stack-xl">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0uicI6JX2FYmJ8M1mghvDNVa1xoMhrfNda-5r7JM-D5XOZSFyqRGTeBE1g2DBipAsnG_N1SBW_a6LSWqM7T94I-8rHa3aex5SK8FjYdPw-kJfuysG2WkdanxaNXW0zkfHk8QrtWop6DjtdfWZAlDMFad7FfHp8nULAWqxtjZ1hhjCaIZO2ZX4W0bB1_KjuC8xspyvlwu35CNGrEdTn3HEzRSzdtCwcmH9cWdGLxEWHKAeiFmERxuo-PIj3pM')" }}></div>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative z-10 p-margin-edge md:p-stack-xl text-paper-white max-w-3xl">
        <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] mb-stack-sm block border-l-4 border-breaking-red pl-4">Urban Activations</span>
        <h1 className="font-display-lg text-[40px] md:text-display-lg mb-stack-md leading-tight">Urban Green Rooms: Reimagining Orchard Road’s Pedestrian Experience</h1>
        <p className="font-body-lg text-body-lg opacity-90 mb-stack-lg">An editorial guide to launching your brand within the heart of Singapore's premier shopping district through the Orchard Road Business Association (ORBA).</p>
      </div>
    </section>
  );
};

export default Hero;
