import React from 'react';
import { Link } from 'react-router-dom';

const D_HomePage: React.FC = () => {
  return (
    <div className=' flex flex-col'>
      <h1 className="font-outfit">Welcome to the Home Page</h1>
      <Link to="/indoor">Go to Indoor Activities</Link>
      <Link to="/family">Go to Family Activities</Link>
      <Link to="/females">Go to Female Activities</Link>
      <Link to="/kids">Go to Kids Activities</Link>
      <Link to="/males">Go to Male Activities</Link>
      <Link to="/outdoor">Go to Outdoor Activities</Link>
      <Link to="/blog">BLOGGGGG</Link>
    </div>
  );
};

export default D_HomePage;
