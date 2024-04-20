import React from 'react'
import AdminComponent from '../../components/Admin/AdminComponent'
import LoginComponent  from '../../components/Admin/LoginComponent'
import useUser from '../../context/userContext';

export const Admin = () => {
  const { user, setUser } = useUser();
  return (
    <div className="admin-main-container">
      {user ? <AdminComponent /> : <LoginComponent />}
    </div>
  );
}
