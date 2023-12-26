import { Table, TableProps } from "antd";
import React from "react";
import { Header } from "../../components/header/Header";
import "./Invoices.css";
import { mockDataInvoices } from "../../data/mockDataInvoices";

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
    title: "Email",
    key: "Email",
    dataIndex: "email"
  },
  {
    id: 3,
    title: "Phone",
    key: "Phone",
    dataIndex: "phone"
  },
  {
    id: 4,
    title: "Cost",
    key: "Cost",
    dataIndex: "cost",
  },
  {
    id: 5,
    title: "Date",
    key: "Date",
    dataIndex: "date",
  }
]

export const Invoices: React.FC<TableProps<DataType>> = () => {


  return (
    <div className="invoices-wrapper">
      <Header title="INVOICES" subtitle="Invoices Balance" />
      <div className="invoices-table-wrapper">
        <Table
          dataSource={mockDataInvoices}
          columns={columns}
          rowKey={"id"}
          className={"invoices-table"}
          pagination={{ position: ["bottomRight"] }}
        /> 
      </div>
    </div>
  );
};

