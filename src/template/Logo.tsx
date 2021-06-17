import React from 'react';

import { Config } from '../utils/Config';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';


  return (
    <div className={`text-gray-900 flex items-center ${fontStyle}`}>
      <img src={'/assets/images/moona.png'} className="h-6 mr-2"></img>
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}


      {Config.site_name}
    </div>
  );
};

export { Logo };
