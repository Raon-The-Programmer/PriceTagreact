
import React from 'react';
import './Pricecard.css';

const PriceCard = ({ plan, price, users, storage, publicProjects, privateProjects, communityAccess,phoneSupport, freeSubdomain, statusReports }) => {
  

  return (
    <div className="price-card">
      <h2>{plan}</h2>
      <div className="price">${price}/month</div>
      <div className="features">
        <p>✔ {users} Users</p>
        <p>✔ {storage} Storage</p>
        <p>✔ {publicProjects} Public Projects </p>
        <p className={communityAccess ? 'supported':'unsupported'}>{communityAccess ? '✔': '✘'} Community Access</p>
        <p className={phoneSupport ? 'supported':'unsupported'}>{phoneSupport ? '✔' : '✘'} Dedicated Phone Support</p>
        <p className={privateProjects ? 'supported':'unsupported'}>{privateProjects ? '✔':'✘'} Private Projects</p>
        
        <p className={freeSubdomain ? 'supported':'unsupported'}>{freeSubdomain ? '✔' : '✘'} Free Subdomain</p>
        <p className={statusReports ? 'supported':'unsupported'}>{statusReports ? '✔' : '✘'} Monthly Status Reports</p>
      </div>
      <button className='button'>Button</button>
    </div>
  );
};

export default PriceCard;
