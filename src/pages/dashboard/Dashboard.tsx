import React from "react";
import { Header } from "../../components/header/Header";
import "./Dashboard.css";
import { FaDownload } from "react-icons/fa";
import { Button } from "antd";
import { StatBox } from "../StatBox";
import { MdEmail } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdOutlinePointOfSale } from "react-icons/md";
import { LineChart } from "../line/LineChart";
import { mockTransactions } from "../../data/mockDataTransactions";
import { ProgressCircle } from "../ProgressCircle/ProgressCircle";
import { BarChart } from "../bar/BarChart";
import { GeoChart } from "../geo/GeoChart";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <Header title="Dashboard" subtitle="Welcome to your dashboard!" />
      </div>
      <div>
        <Button
          style={{ background: "#a4a9fc", color: "#141414" }}
          icon={<FaDownload />}
          className="download-reports-btn"
        >
          Download Reports
        </Button>
      </div>
      <div className="dashboard-grid">
        {/* ROW ONE */}
        <div className="row-one">
          <StatBox
            title="12,361"
            subtitle="Emails sent"
            progress="0.76"
            increase="+14%"
            icon={<MdEmail className="email-icon" />}
            className="statbox-row-one"
          />
        </div>

        <div className="row-one">
          <StatBox
            title="54,321"
            subtitle="Sales obtained"
            progress="0.5"
            increase="+21%"
            icon={<MdOutlinePointOfSale className="sales-icon" />}
            className="statbox-row-one"
          />
        </div>

        <div className="row-one">
          <StatBox
            title="94,293"
            subtitle="New clients"
            progress="0.30"
            increase="+6%"
            icon={<FaUsers className="clients-icon" />}
            className="statbox-row-one"
          />
        </div>

        <div className="row-one">
          <StatBox
            title="1,27,342"
            subtitle="Traffic inbound"
            progress="0.98"
            increase="+52%"
            icon={<MdBusinessCenter className="traffic-icon" />}
            className="statbox-row-one"
          />
        </div>

        {/* ROW 2 */}
        <div className="row-two-wrapper">
          <div className="row-two">
            <div>
              <h5 className="row-two-h5">Revenue Generated</h5>
              <h3 className="row-two-h3">$59,342,23</h3>
            </div>

            <div>
              <Button icon={<FaDownload />}></Button>
            </div>
          </div>

          <div className="linechart-wrapper">
            <LineChart isDashboard={true} />
          </div>
          </div>

          {/* TRANSACTIONS */}
          <div className="transactions-wrapper">
            <div className="transaction-row">
              <h4>Recent transations</h4>
              {mockTransactions.map((transaction) => (
                <div className="transaction" key={transaction.txId}>
                  <div>
                    <h5 className="transaction-h5">{transaction.txId}</h5>
                  </div>

                  <div>
                    <h5 className="transaction-h5-user">{transaction.user}</h5>
                  </div>
                  <div className="transaction-date-box">{transaction.date}</div>
                  <div className="transaction-cost-box">{transaction.cost}</div>
                </div>
              ))}
            </div>
          </div>
            
            {/* ROW THREE */}
            <div className="row-three-wrapper">
                <h5 className="campaign-h5">Campaign</h5>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-25px'}}>
                <ProgressCircle size="125"/>
                <h5 className="revenue-h5">$43,654 revenue generated</h5>
                <h5 className="additional-comment">Includes extra misc expenditures and costs</h5>
              </div>
            </div>

            <div className="row-three-wrapper">
                <h5 className="sales-h5">Sales Quantity</h5>
              <div className="bar-wrapper" >
               <BarChart />
              </div>
            </div>

            <div className="row-three-wrapper">
                <h5 className="geo-h5">Geography based traffic</h5>
              <div className="geo-wrapper">
               <GeoChart />
              </div>
            </div>
        </div>
    </div>
  );
};
