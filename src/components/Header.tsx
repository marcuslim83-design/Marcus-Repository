import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-background border-b border-gray sticky top-0 z-50 px-margin-edge">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-20">
        <div className="flex items-center gap-stack-md">
          <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
          <span className="font-headline-xl text-headline-xl uppercase tracking-tighter text-rule-black hidden md:block">THE GAZETTE</span>
          <span className="font-headline-xl-mobile text-headline-xl-mobile uppercase tracking-tighter text-rule-black md:hidden">THE GAZETTE</span>
        </div>
        <nav className="hidden lg:flex items-center gap-stack-lg">
          <a className="font-label-lg text-label-lg text-primary border-b-2 border-primary py-1" href="#">Business</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:underline decoration-1" href="#">World</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:underline decoration-1" href="#">Lifestyle</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:underline decoration-1" href="#">Opinion</a>
        </nav>
        <div className="flex items-center gap-stack-md">
          <span className="material-symbols-outlined text-primary">account_circle</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
