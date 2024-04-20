import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import db from '../../constants/Firebase';
import LargeContactTable from './LargeContactTable';
import SmallContactTable from './SmallContactTable';

const AdminComponent = () => {
  const [activeTab, setActiveTab] = useState('large'); // State to track active tab

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    Swal.fire({
      icon: 'success',
      title: 'Signed Out Successfully!',
      text: 'You have been signed out successfully!',
    });
  };

  return (
    <div className="Admin-container">
    <div className='width-container'>
      <header className="header">
        <div className="tabs-container">
          <button
            className={activeTab === 'large' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('large')}
          >
            Large Contact Table
          </button>
          <button
            className={activeTab === 'small' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('small')}
          >
            Small Contact Table
          </button>
        </div>
        <button onClick={handleSignOut} className="signOut">
          Sign Out
        </button>
      </header>
      <div className="content-container">
        {/* Content of the respective tab */}
        {activeTab === 'large' && <LargeContactTable />}
        {activeTab === 'small' && <SmallContactTable />}
      </div>
      </div>
    </div>
  );
};

export default AdminComponent;
