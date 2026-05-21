import React, { useState } from 'react';

const ActivationWizard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rates');

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="border-t-4 border-primary pt-stack-sm mb-stack-lg flex justify-between items-center">
        <h2 className="font-label-lg text-label-lg uppercase tracking-widest">Start Your Activation</h2>
        <div className="hidden md:flex gap-4">
          <button
            className={`font-label-lg text-label-lg px-4 py-2 transition-all ${activeTab === 'rates' ? 'bg-primary text-paper-white' : 'text-on-surface hover:bg-surface-container'}`}
            onClick={() => switchTab('rates')}
          >
            Rates
          </button>
          <button
            className={`font-label-lg text-label-lg px-4 py-2 transition-all ${activeTab === 'process' ? 'bg-primary text-paper-white' : 'text-on-surface hover:bg-surface-container'}`}
            onClick={() => switchTab('process')}
          >
            Process
          </button>
          <button
            className={`font-label-lg text-label-lg px-4 py-2 transition-all ${activeTab === 'rules' ? 'bg-primary text-paper-white' : 'text-on-surface hover:bg-surface-container'}`}
            onClick={() => switchTab('rules')}
          >
            Rules
          </button>
        </div>
      </div>

      {activeTab === 'rates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <div className="border border-gray p-stack-lg hover:border-primary transition-colors flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Category: Commercial</span>
            <h3 className="font-headline-lg text-headline-lg mb-stack-md">Off-Peak Rates</h3>
            <div className="text-[48px] font-bold font-display-lg mb-stack-md">$1,000<span className="text-label-lg font-label-lg">/DAY</span></div>
            <ul className="font-body-md text-body-md space-y-2 mb-stack-lg text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Monday through Thursday</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Standard setup assistance</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Basic site management</li>
            </ul>
            <button className="mt-auto bg-primary text-paper-white py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-on-surface-variant transition-colors">Select Tier</button>
          </div>
          <div className="border border-primary p-stack-lg bg-surface-container-low relative flex flex-col">
            <div className="absolute top-0 right-0 bg-primary text-paper-white px-3 py-1 font-label-sm text-label-sm uppercase">Recommended</div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Category: Commercial</span>
            <h3 className="font-headline-lg text-headline-lg mb-stack-md">Peak Rates</h3>
            <div className="text-[48px] font-bold font-display-lg mb-stack-md">$1,500<span className="text-label-lg font-label-lg">/DAY</span></div>
            <ul className="font-body-md text-body-md space-y-2 mb-stack-lg text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Friday, Saturday, Sunday &amp; Public Holidays</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> High-traffic visibility guarantee</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Priority support during activation</li>
            </ul>
            <button className="mt-auto bg-primary text-paper-white py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-on-surface-variant transition-colors">Select Tier</button>
          </div>
        </div>
      )}

      {activeTab === 'process' && (
        <div className="animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            <div className="absolute top-[22px] left-0 right-0 h-[1px] bg-gray hidden md:block"></div>
            <div className="relative bg-background pr-4">
              <div className="w-12 h-12 bg-primary text-paper-white flex items-center justify-center font-bold mb-4 relative z-10">01</div>
              <h4 className="font-label-lg text-label-lg uppercase mb-2">Submission</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Submit your application form and information deck to ORBA.</p>
            </div>
            <div className="relative bg-background pr-4">
              <div className="w-12 h-12 bg-primary text-paper-white flex items-center justify-center font-bold mb-4 relative z-10">02</div>
              <h4 className="font-label-lg text-label-lg uppercase mb-2">Review</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">ORBA evaluates the proposal based on visual and safety standards (7-10 days).</p>
            </div>
            <div className="relative bg-background pr-4">
              <div className="w-12 h-12 bg-primary text-paper-white flex items-center justify-center font-bold mb-4 relative z-10">03</div>
              <h4 className="font-label-lg text-label-lg uppercase mb-2">Licensing</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Apply for necessary licenses from BCA, SPF, SCDF, or SFA as required.</p>
            </div>
            <div className="relative bg-background">
              <div className="w-12 h-12 bg-primary text-paper-white flex items-center justify-center font-bold mb-4 relative z-10">04</div>
              <h4 className="font-label-lg text-label-lg uppercase mb-2">Activation</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Confirm dates, pay fees, and begin your Urban Green Room setup.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rules' && (
        <div className="animate-in fade-in duration-300">
          <div className="border border-gray p-stack-lg bg-surface-container-lowest">
            <div className="flex items-start gap-stack-md mb-stack-md">
              <span className="material-symbols-outlined text-breaking-red">warning</span>
              <div>
                <h4 className="font-headline-md text-headline-md mb-2">Core Guidelines</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">All pop-up spaces must adhere to strict public safety and visual quality requirements to maintain the prestige of Orchard Road.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm font-label-lg text-label-lg">
                  <li className="p-4 border border-gray flex items-center gap-3"><span className="material-symbols-outlined">block</span> NO LOUD SPEAKER BROADCASTING</li>
                  <li className="p-4 border border-gray flex items-center gap-3"><span className="material-symbols-outlined">rule</span> MINIMUM 1.5M PEDESTRIAN CLEARANCE</li>
                  <li className="p-4 border border-gray flex items-center gap-3"><span className="material-symbols-outlined">cleaning_services</span> SITE RESTORATION MANDATORY</li>
                  <li className="p-4 border border-gray flex items-center gap-3"><span className="material-symbols-outlined">schedule</span> OPERATIONS: 10AM - 10PM DAILY</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivationWizard;
