import React from 'react';
import logoSvg from './social-media.svg';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logoSvg} alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
