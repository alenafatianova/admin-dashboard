import React from 'react'
import './Topbar.css'
import { Button, Input } from 'antd'
import { SearchProps } from 'antd/es/input';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const onSearch: SearchProps['onSearch'] = (value: string, _e: any, info: any) => console.log(info?.source, value);

type TopbarType = {
  theme: string
  setTheme: (theme: string) => void
}

export const Topbar: React.FC<TopbarType> = ({ theme, setTheme }) => {

  const { Search } = Input

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className='topbar-wrapper'>
      <div className='searchbar-box'>
      <Search 
        className='searchbar-input'
        allowClear
        style={{width: '300px', background: 'inherit'}}
        placeholder='Search'
        onSearch={(v: string, e: any, i: any) => onSearch(v, e, i)}
      />
      </div>

      <div className='topbar-menu-icons'>
      <Button className='mode-button' onClick={switchTheme} icon={theme === 'dark' ? <MdDarkMode className='darkmode-icon'/> : <MdOutlineLightMode className='lightmode-icon' /> }></Button>
      <Button className='notifications-button' icon={<IoNotifications  className='notifications-icon'/>}></Button>
      <Button className='user-button' icon={<FaUser className='user-icon' />}></Button>
      <Button className='settings-button' icon={<IoSettings className='settings-icon' />}></Button>
      </div>
    </div>
  )
}
