import React from 'react';

const ResourceLibrary: React.FC = () => {
  return (
    <div className="bg-surface-container-low p-stack-lg h-fit">
      <h3 className="font-label-lg text-label-lg uppercase mb-stack-md border-b-2 border-primary pb-2">Resource Library</h3>
      <div className="space-y-stack-sm">
        <a className="group flex items-center justify-between p-4 bg-paper-white border border-gray hover:border-primary transition-colors" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-on-surface-variant">description</span>
            <span className="font-label-md text-label-md">Information Deck</span>
          </div>
          <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">download</span>
        </a>
        <a className="group flex items-center justify-between p-4 bg-paper-white border border-gray hover:border-primary transition-colors" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-on-surface-variant">assignment</span>
            <span className="font-label-md text-label-md">Application Form</span>
          </div>
          <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">download</span>
        </a>
        <a className="group flex items-center justify-between p-4 bg-paper-white border border-gray hover:border-primary transition-colors" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-on-surface-variant">map</span>
            <span className="font-label-md text-label-md">Site Floor Plans</span>
          </div>
          <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">download</span>
        </a>
      </div>
      <div className="mt-stack-lg pt-stack-lg border-t border-gray/50">
        <h4 className="font-label-sm text-label-sm uppercase mb-stack-sm text-on-surface-variant">Direct Inquiry</h4>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray overflow-hidden">
            <img alt="Juliana Fan Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3BfIypleT12aoM8jy3ruO1UzfHB3ATBIwYAL8-ic7twWccMykjtuDZj9qp5_TBmN7ZSxjsopgbubGVQLUNrlR3dzXqD1mJU1ZdLEeyzk6HN84riCBrRx93T1JQJp2INzYH3cqQ-qiXSwmXzwwOEPjJeNAibteKXsUWsxDShsaZpn1aFg-9go1XGoy2fu8Yc4aoEluC1SQC5nAAN2TQ0eyY_eH6i24diiay7FpsocZzVV79P7zip_z05Z6R8fY9ijBDyxDZ_QbaQ_v"/>
          </div>
          <div>
            <p className="font-label-lg text-label-lg">Juliana Fan</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Partnerships Director</p>
          </div>
        </div>
        <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 border border-primary font-label-lg text-label-lg uppercase hover:bg-primary hover:text-paper-white transition-all">
          <span className="material-symbols-outlined text-sm">mail</span> Contact ORBA
        </button>
      </div>
    </div>
  );
};

export default ResourceLibrary;
