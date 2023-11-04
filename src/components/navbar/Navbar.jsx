import React from 'react';

export default function Navbar() {
  const handleColorChange = (newColor) => {
    document.documentElement.style.setProperty('--secondaryColor', newColor);
  };

  return (
    <div className='navbar'>
      <div className='link'>
        <ul>
          <li>
            <a href='#home'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#works'>WORKS</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className='settings'>
        <p>SELECT COLOR </p><p> ▻►▻►</p>
        <button className='btnPink' onClick={() => handleColorChange('#ffbffb')}></button>
        <button className='btnYellow' onClick={() => handleColorChange('#f8f87c')}></button>
        <button className='btnBlue' onClick={() => handleColorChange('#B0E0E6')}></button>
        <button className='btnGreen' onClick={() => handleColorChange('#98FB98')}></button>
        <p>◄◅◄◅</p>
      </div>
    </div>
  );
}
