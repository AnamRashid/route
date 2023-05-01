import React from 'react'
import Accounts from './Accounts'
import Setting from './Setting'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <nav>
        <div>Dashboard</div>
    <ul>
        <li>
            <NavLink to="/dashboard/setting">Setting</NavLink>
           
        </li>
        <li>
            <NavLink to="/dashboard/account">Account</NavLink>
           
        </li>
      
    </ul>
    </nav>
  );
};

export default Dashboard
