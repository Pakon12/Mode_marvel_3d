import React from 'react';
import './leftBar.css';

const LeftBar = ({ data, index, setIndex, setPath, setScale }) => {
  const handleClick = (clickedIndex, path, scale) => {
    setIndex(clickedIndex);
  };

  return (
    <div className='section-bar'>
      <ul>
        <h3> ฮีโรที่เรารัก : Marvel </h3>
        {data.map(item => (
          <React.Fragment key={item.id}>
            {index === item.id ? (
              <li className='name-li' onClick={() => handleClick(item.id, item.path, item.scale)}>
                <del>
                    {item.id + 1}: {item.name}
                    <p></p>
                </del>
              </li>
            ) : (
              <li className='name-li' onClick={() => handleClick(item.id, item.path, item.scale)}>
                <p>{item.id + 1}:{item.name}</p>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
