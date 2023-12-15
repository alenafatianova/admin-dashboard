import React, { useState } from "react";
import { Link, To } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { MdGroup } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoPieChart } from "react-icons/io5";
import { FcLineChart } from "react-icons/fc";
import { FaMap } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import user from "../../assets/user.jpg";
import "./Sidebar.css";
import { Button } from "antd";

type ItemType = {
  title?: string;
  to?: string;
  icon?: React.ReactNode;
  selected: string;
  setSelected: (selected: string) => void;
};

export const Item: React.FC<ItemType> = ({
  title = "",
  to = "",
  icon,
  selected,
  setSelected,
}) => {
  return (
    <MenuItem
      active={selected === title}
      className="item"
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <p>{title}</p>
      <Link to={to} />
    </MenuItem>
  );
};

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="sidebar-wrapper">
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            className="menu-item"
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <IoMdMenu className="sidebar-menu-icon"/> : null}
            style={{ margin: "10px 0 20px 0" }}
          >
            {!isCollapsed && (
              <div className="sidebar-active">
                <Button
                className="sibebar-menu-button"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={<IoMdMenu className="sidebar-menu-icon"/>}
                ></Button>
                <h3 className="admin-sidebar-h3">Adminis</h3>
              </div>
            )}
          </MenuItem>

          {!isCollapsed && (
            <div className="sidebar-user-profile">
              <div className="sidebar-user-image">
                <img src={user} alt="User's Profile" className="user-image" />
              </div>

              <div className="sidebar-user-title">
                <h2 className="sidebar-user-h2">Robert P.Davidson</h2>
                <h5 className="sidebar-user-h5">VIP Admin</h5>
              </div>
            </div>
          )}
          <div style={{ paddingLeft: isCollapsed ? undefined : "10%" }}>
            <Item
              title="Dashboard"
              to="/"
              icon={<FaHome />}
              selected={selected}
              setSelected={setSelected}
            />

            <h6 className="sidebar-h6">Data</h6>
            <Item
              title="Manage Team"
              to="/team"
              icon={<MdGroup />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<IoIosContacts />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices Balance"
              to="/invoices"
              icon={< FaFileInvoiceDollar />}
              selected={selected}
              setSelected={setSelected}
            />

            <h6 className="sidebar-h6">Pages</h6>
            <Item
              title="Profile Form"
              to="/form"
              icon={<FaUser />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Calendar"
              to="/calendar"
              icon={<FaCalendarAlt />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="FAQ Page"
              to="/faq"
              icon={<FaQuestionCircle />}
              selected={selected}
              setSelected={setSelected}
            />

            <h6 className="sidebar-h6">Charts</h6>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BiSolidBarChartAlt2 />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<IoPieChart />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<FcLineChart />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geo Chart"
              to="/geo"
              icon={<FaMap />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </ProSidebar>
    </div>
  );
};
