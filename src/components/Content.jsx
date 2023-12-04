import React from 'react';
import './Content.css'

const Content = ({ data , index }) => {
  
  const item = data && data.length > 0 ? data[index] : null;

  if (!item) {
    return <p>No data available.</p>;
  }

  return (
    <div className="card" key={item.id}>
      <h1>{item.name}</h1>
      <p>ข้อมูล:{item.discription}</p>
    </div>
  );
}

export default Content;
