import * as React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Footer } = Layout;

interface InfoFooterProps {
  copyrightInfo: string,
  footerItems?: Array<Link>
}

const InfoFooter: React.SFC<InfoFooterProps> = (props) => {
  return (
    <Layout>
      <Footer className="footer" 
        style={{backgroundColor: "#95de64", bottom:0}}>
        {props.copyrightInfo}
      </Footer>
  </Layout>
  );
};

export default InfoFooter;