import React from 'react';

const Categories = ({filtered,item}) => {

  return <div className="btn-container">
     <button className="filter-btn" onClick={()=>filtered('all')}>Menu</button>
    <button className="filter-btn" onClick={
      ()=>filtered('breakfast')}>Breakfast</button>
    <button className="filter-btn" onClick={
      ()=>filtered('lunch')}>Lunch</button>
    <button className="filter-btn" onClick={
      ()=>filtered('shakes')}>Shakes</button>
  
  </div>
};

export default Categories;
