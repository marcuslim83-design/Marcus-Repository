import React from 'react';

const ComplianceRoadmap: React.FC = () => {
  return (
    <div className="md:col-span-2">
      <div className="border-t border-gray pt-stack-sm mb-stack-lg">
        <h2 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">Compliance Roadmap</h2>
      </div>
      <div className="space-y-stack-lg relative before:content-[''] before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gray">
        <div className="relative pl-12">
          <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full ring-4 ring-background z-10"></div>
          <h4 className="font-headline-md text-headline-md">30-Day Processing Window</h4>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">All applications should be submitted at least one month prior to the event date to ensure proper vetting and statutory clearance.</p>
        </div>
        <div className="relative pl-12">
          <div className="absolute left-0 top-1 w-6 h-6 border-2 border-primary bg-background rounded-full ring-4 ring-background z-10"></div>
          <h4 className="font-headline-md text-headline-md">Statutory Authorities</h4>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 border border-gray font-label-sm text-label-sm uppercase">BCA (Structural)</span>
            <span className="px-3 py-1 border border-gray font-label-sm text-label-sm uppercase">SPF (Police)</span>
            <span className="px-3 py-1 border border-gray font-label-sm text-label-sm uppercase">SCDF (Fire)</span>
            <span className="px-3 py-1 border border-gray font-label-sm text-label-sm uppercase">SFA (Food)</span>
          </div>
        </div>
        <div className="relative pl-12">
          <div className="absolute left-0 top-1 w-6 h-6 border-2 border-gray bg-background rounded-full ring-4 ring-background z-10"></div>
          <h4 className="font-headline-md text-headline-md">Visual Impact Assessment</h4>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">ORBA reserves the right to reject proposals that do not align with the "Premier Shopping Belt" aesthetic standards.</p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceRoadmap;
