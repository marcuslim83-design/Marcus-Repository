import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-low border-t-4 border-primary mt-stack-xl">
      <div className="max-w-[1200px] mx-auto px-margin-edge py-stack-xl flex flex-col md:flex-row justify-between gap-stack-lg">
        <div className="md:w-1/3">
          <span className="font-headline-md text-headline-md text-primary uppercase tracking-tighter block mb-stack-sm">THE GAZETTE</span>
          <p className="font-body-md text-body-md text-on-surface-variant">Established 1904. The definitive source for Singapore's urban development and business journalism.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-stack-lg md:w-2/3">
          <div>
            <h5 className="font-label-lg text-label-lg uppercase mb-4">The Paper</h5>
            <ul className="font-label-md text-label-md space-y-2 text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Site Map</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg uppercase mb-4">Advisory</h5>
            <ul className="font-label-md text-label-md space-y-2 text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Compliance</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Permits</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Guidelines</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-label-lg text-label-lg uppercase mb-4">Subscribe</h5>
            <div className="flex">
              <input className="w-full bg-paper-white border border-gray px-4 py-2 font-label-md outline-none focus:border-primary" placeholder="Email" type="email"/>
              <button className="bg-primary text-paper-white px-4 py-2 uppercase font-label-sm">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-margin-edge pb-stack-md text-center border-t border-gray/30 pt-stack-md">
        <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Heritage Journalism Corp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
