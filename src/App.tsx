import React from 'react';
import useLocalStorage from 'use-local-storage'
import './App.css';
import { Topbar } from './pages/NavBars/Topbar';
import { Sidebar } from './pages/NavBars/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Invoices } from './pages/invoices/Invoices';
import { Team } from './pages/team/Team';
import { Contacts } from './pages/contacts/Contacts';
import { NewUserForm } from './pages/form/Form';
import { FAQ } from './pages/faq/FAQ';
import { Pie } from './pages/pie/Pie';
import { GeoChartBox } from './pages/geo/GeoChartBox';
import { Calendar } from './pages/calendar/Calendar';
import { LineChartBox } from './pages/line/LineChartBox';
import { BarChartBox } from './pages/bar/BarChartBox';

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
          <Route path='/bar' element={ <BarChartBox /> } />
          <Route path='/form' element={ <NewUserForm /> } />
          <Route path='/line' element={ <LineChartBox /> } />
          <Route path='/pie' element={ <Pie /> } />
          <Route path='/faq' element={ <FAQ /> } />
          <Route path='/geo' element={ <GeoChartBox /> } />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
       
      </main>
    </div>
  );
}

