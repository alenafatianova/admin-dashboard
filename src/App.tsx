import React from 'react';
import useLocalStorage from 'use-local-storage'
import './App.css';

export const App: React.FC = () =>  {
  
  const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className='wrapper' data-theme={theme}>
      <button onClick={switchTheme}>Switch theme</button>
      <p>hello</p>
      <main className='content'></main>
    </div>
  );
}

