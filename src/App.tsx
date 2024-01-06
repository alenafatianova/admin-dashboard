import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage'
import './App.css';
import { Topbar } from './pages/NavBars/Topbar';
import { Sidebar } from './pages/NavBars/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Invoices } from './pages/invoices/Invoices';
import { Team } from './pages/team/Team';
import { Contacts } from './pages/contacts/Contacts';
import { Bar } from './pages/bar/Bar';
import { Line } from './pages/line/Line';
import { NewUserForm } from './pages/form/Form';
import { FAQ } from './pages/faq/FAQ';
import { Pie } from './pages/pie/Pie';
import { Geo } from './pages/geo/Geo';
import { Calendar } from './pages/calendar/Calendar';

export const App: React.FC = () =>  {
  
  const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
  
  return (
    <div className='wrapper' data-theme={theme}>
       <Sidebar />
      <main className='content'>
        <Topbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={ <Dashboard />} />
          <Route path='/team' element={<Team /> } />
          <Route path='/invoices' element={<Invoices /> } />
          <Route path='/contacts' element={<Contacts /> } />
          <Route path='/bar' element={ <Bar /> } />
          <Route path='/form' element={ <NewUserForm /> } />
          <Route path='/line' element={ <Line /> } />
          <Route path='/pie' element={ <Pie /> } />
          <Route path='/faq' element={ <FAQ /> } />
          <Route path='/geo' element={ <Geo /> } />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
       
      </main>
    </div>
  );
}

