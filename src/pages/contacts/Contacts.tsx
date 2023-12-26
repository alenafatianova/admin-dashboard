import { Button, Checkbox, Dropdown, DropdownProps, MenuProps, Table, TableProps } from "antd";
import React, { Key, useState } from "react";
import { Header } from "../../components/header/Header";
import { mockDataContacts } from "../../data/mockDataContacts";
import "./Contacts.css";
import { RxColumns } from "react-icons/rx";
import { CiExport } from "react-icons/ci";
import { CSVLink } from 'react-csv'

type DataType = {
  key?: string;
  id?: any;
  title?: string;
  dataIndex: string
  className?: string
};

const columns: DataType[] = [
  {
    id: 1,
    title: "Name",
    key: "Name",
    dataIndex: "name"
  },
  {
    id: 2,
    title: "Register ID",
    key: "registerId",
    dataIndex: "registerId"
  },
  {
    id: 3,
    title: "Email",
    key: "Email",
    dataIndex: "email"
  },
  {
    id: 4,
    title: "Age",
    key: "Age",
    dataIndex: "age"
  },
  {
    id: 5,
    title: "Phone",
    key: "Phone",
    dataIndex: "phone"
  },
  {
    id: 6,
    title: "Address",
    key: "Address",
    dataIndex: "address",
  },
  {
    id: 7,
    title: "City",
    key: "City",
    dataIndex: "city",
  },
  {
    id: 8,
    title: "ZipCode",
    key: "zipCode",
    dataIndex: "zipCode",
  },
]

export const Contacts: React.FC<TableProps<DataType>> = () => {
  const [selectedRowKeys, setSelectedRowsKeys] = useState<React.Key[]>([]);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  let [baseColumns, setBaseColumns] = useState(columns.filter(column => column.dataIndex !== 'age'))

  const onSelectRowsChange = (selectedRowKeys: Key[]) => {
    setSelectedRowsKeys(selectedRowKeys)
  };

  const onDropdownHandler = () => {
    setDropdownToggle(!dropdownToggle)
  };

  const onChangeDropdown = (checkedValues: any) => {
    setBaseColumns(columns.filter(column => !checkedValues.includes(column.dataIndex)))
  }

  // const items: MenuProps["items"] = [
  //   {
  //     key: "1",
  //     label: (
  //       <div className="name-column-switch">
  //         <span className="item-column-title">Name</span>
  //         <Switch
  //           value={checkedName}
  //           title="Name"
  //           size="small"
  //           className={"switch-menu-item-name"}
  //           onChange={onNameColumnHandler}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     title: "Register ID",
  //     label: (
  //       <div className="registerId-column-switch">
  //         <span className="item-column-title">Register ID</span>
  //         <Checkbox value={'registerID'} />
  //         {/* <Switch
  //           value={checkedRegisterID}
  //           title="Register ID"
  //           size="small"
  //           className='switch-menu-item-name'
  //           onChange={(checked) => onRegisterIDColumnHandler(checked)}
  //         /> */}
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     title: "Email",
  //     label: (
  //       <div className="email-column-switch">
  //         <span className="item-column-title">Email</span>
  //         <Switch
  //           value={checkedEmail}
  //           title="Email"
  //           size="small"
  //           className="switch-menu-item-name"
  //           onChange={onEmailColumnHandler}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "4",
  //     title: "Age",
  //     label: (
  //       <div className="age-column-switch">
  //         <span className="item-column-title">Age</span>
  //         <Checkbox />
  //         {/* <Switch
  //           value={checkedAge}
  //           title="Age"
  //           size="small"
  //           className="switch-menu-item-name"
  //           onChange={onAgeColumnHandler}
  //         /> */}
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "5",
  //     title: "Phone",
  //     label: (
  //       <div className="phone-column-switch">
  //         <span className="item-column-title">Phone</span>
  //         <Switch
  //           value={checkedPhone}
  //           title="Phone"
  //           size="small"
  //           className="switch-menu-item-name"
  //           onChange={onPhoneColumnHandler}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "6",
  //     title: "City",
  //     label: (
  //       <div className="city-column-switch">
  //         <span className="item-column-title">City</span>
  //         <Switch
  //           value={checkedCity}
  //           title="City"
  //           size="small"
  //           className="switch-menu-item-name"
  //           onChange={onCityColumnHandler}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "7",
  //     title: "Address",
  //     label: (
  //       <div className="address-column-switch">
  //         <span className="item-column-title">Address</span>
  //         <Switch
  //           value={checkedAddress}
  //           title="Address"
  //           size="small"
  //           className="switch-menu-item-name"
  //           onChange={onAddressColumnHandler}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "8",
  //     title: "ZipCode",
  //     label: (
  //       <div className="zipCode-column-switch">
  //         <span className="item-column-title">ZipCode</span>
  //         <Switch
  //           value={checkedZipCode}
  //           title="ZipCode"
  //           size="small"
  //           className="switch-menu-item-name"
  //           onChange={onZipCodeColumnHandler}
  //         />
  //       </div>
  //     ),
  //   },
  // ];

  const items: MenuProps["items"] = [
    
    {
      key: 1,
      title: '',
      label: (
        <Checkbox.Group onChange={onChangeDropdown} className="checkboxGroup" >
        <Checkbox value="name">Name</Checkbox>
        <Checkbox value="registerId">Register ID</Checkbox>
        <Checkbox value="age">Age</Checkbox>
        <Checkbox value="email">Email</Checkbox>
        <Checkbox value="phone">Phone</Checkbox>
        <Checkbox value="address">Address</Checkbox>
        <Checkbox value="city">City</Checkbox>
        <Checkbox value="zipCode">ZipCode</Checkbox>
      </Checkbox.Group>
      )
    }
  ];

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setDropdownToggle(nextOpen);
    }
  };

  const onRowsSelection = {
    selectedRowKeys,
    onChange: onSelectRowsChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_NONE],
  };

  return (
    <div className="contacts-wrapper">
      <Header title="Contacts" subtitle="List of contacts" />
      <div className="table-topbar" >
       <Dropdown
          open={dropdownToggle}
          menu={{ items }}
          className="dropdown-menu"
          trigger={['click']}
          onOpenChange={handleOpenChange}
        >
          <Button onClick={onDropdownHandler} className="button-dropdown" icon={<RxColumns className="button-dropdown-icon"/>}></Button>
        </Dropdown>
        <div className="csv-download-wrapper">
          <CSVLink data={mockDataContacts} filename="ContactsTable.csv"> 
          <Button  className="csv-export-button" icon={<CiExport className="csv-export-button-icon" />}></Button>
          </CSVLink>
        </div>
      </div>
      <div className="contacts-table-wrapper">
        <Table
          dataSource={mockDataContacts}
          columns={baseColumns}
          rowSelection={onRowsSelection}
          rowKey={"id"}
          className={"contacts-table"}
          pagination={{ position: ["bottomRight"] }}
        /> 
      </div>
    </div>
  );
};
