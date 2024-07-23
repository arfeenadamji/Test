import React from 'react';
import AuthStack from './AuthStack';
import DashboardStack from './DashBoardStack';

const RootStack = () => {
  // user can be get from redux
const user1= false
  if (user1) {
    return <DashboardStack />;
  } else {
    return <AuthStack />;
  }
};

export default RootStack;
