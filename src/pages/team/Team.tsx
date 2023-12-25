import React, { ReactNode, useState } from 'react'
import './Team.css'
import { Header } from '../../components/header/Header'
import { Table } from 'antd'
import { ColumnsType, Key, RowSelectMethod, TableRowSelection } from 'antd/es/table/interface'
import { mockDataTeam } from '../../data/mockDataTeam'
import { FaUnlock } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

type RowsType = {
  name: string
  access: AccessType
  email: string
  age: number
}

type DataType = {
  key: string
  id: number
  title: string
  dataIndex: string
  className?: string
  render?: (text: any, record: any, index: number ) => ReactNode
}

enum AccessLevel {
  ADMIN = 'admin',
  MANAGER = 'manager',
  USER = 'user'
}

type AccessType = {
  access: string
}

const columns: DataType[] = [
  {
    id: 1,
    title: "Name",
    key: 'Name',
    dataIndex: 'name',
    className: 'table-name-column',
    render: ({classname, visible}) => {
      return (
        <div></div>
      )
    }
  },
  {
    id: 2,
    title: "Email",
    key: 'Email',
    dataIndex: 'email'
  },
  {
    id: 3,
    title: "Age",
    key: 'Age',
    dataIndex: 'age'
  },
  {
    id: 4,
    title: "Phone",
    key: 'Phone',
    dataIndex: 'phone'
  },
  {
    id: 5,
    title: "Access level",
    key: 'Access',
    dataIndex: 'access',
    className: 'table-access-column',
    render: (value: AccessLevel) => {
      return (
        <>
      <div className='access-level-row' style={{backgroundColor: value === 'admin' ? '#5bffd4' : '#94e2cd'}} >
        {value === 'admin' && <MdAdminPanelSettings className='acess-admin-icon' />}
        {value === 'manager' && <MdOutlineSecurity className='access-manager-icon' />}
        {value === 'user' && <FaUnlock className='access-user-icon' />}
        <p className='access-level-text'>
          {value}
        </p>
      </div>
      </>
      )
    }
  }
]

export const Team: React.FC = () => {

  const [selectedRowKeys, setSelectedRowsKeys] = useState<React.Key[]>([])

  const onSelectRowsChange = (selectedRowKeys: Key[]) => {
    setSelectedRowsKeys(selectedRowKeys)
    
  }

  const onRowsSelection = {
    selectedRowKeys,
    onChange: onSelectRowsChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_NONE
    ]
  }

  return (
    <div className='team-wrapper'>
      <Header title='Team' subtitle='Managing the Team Members' />
      <div className='team-table-wrapper'>
        <Table 
          dataSource={mockDataTeam}
          columns={columns}
          rowSelection={onRowsSelection} 
          rowKey={'id'}
          className='team-table'
          pagination={{position: ['bottomRight']}}
        />
      </div>
    </div>
  )
}
