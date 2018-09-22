import * as React from 'react';
import Navbar from '../src/components/Navbar';

interface MainProps {
  isHome?: boolean
}

const Main: React.SFC<MainProps> = () => {
  return (
    <div>
      <Navbar headerName="StudySocial" />
    </div>
  );
};

export default Main;