import React from 'react';

const BottomNav: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center h-16 bg-background border-t border-gray">
      <div className="flex flex-col items-center justify-center text-primary font-bold transition-all scale-95 duration-75">
        <span className="material-symbols-outlined">home</span>
        <span className="font-label-sm text-label-sm">Home</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant">
        <span className="material-symbols-outlined">sensors</span>
        <span className="font-label-sm text-label-sm">Live</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant">
        <span className="material-symbols-outlined">bookmark</span>
        <span className="font-label-sm text-label-sm">Saved</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant">
        <span className="material-symbols-outlined">person</span>
        <span className="font-label-sm text-label-sm">Profile</span>
      </div>
    </nav>
  );
};

export default BottomNav;
