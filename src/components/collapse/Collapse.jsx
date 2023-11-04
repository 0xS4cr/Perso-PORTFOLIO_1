import React, { useState } from 'react';
import arrowUp from '../../assets/arrow_up.png';
import data from '../../data/collapsesAbout.json';

function Collapse() {
  const [openIndex, setOpenIndex] = useState(null); 

  const handleCollapseClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="collapse__ctn">
      {data.map((item, index) => (
        <div className="collapse__item" key={index}>
          <div
            className={`collapse__title ${openIndex === index ? 'open' : ''}`}
            onClick={() => handleCollapseClick(index)} 
          >
            {item.title} 
            <img
              src={arrowUp}
              alt="Flèche vers le haut"
              className={`arrow-icon ${openIndex === index ? 'rotate' : ''}`}
            />
          </div>
          {openIndex === index && ( 
            <div className="collapse__description">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;
