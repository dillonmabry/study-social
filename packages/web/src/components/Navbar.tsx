import * as React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

interface NavbarProps {
  headerName: string,
  menuItems?: Array<Link>
}

const Navbar: React.SFC<NavbarProps> = (props) => {
  return (
    <Layout>
      <Header className="header" style={{backgroundColor:"#0050b3"}}>
        <div className="logo" />
        <h2 style={{color: "#ffffff"}}>{props.headerName}</h2>
      </Header>
  </Layout>
  );
};

export default Navbar;