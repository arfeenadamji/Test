import React from 'react';
import AuthStack from './AuthStack';
import DashboardStack from './DashBoardStack';

const RootStack = () => {
  // user can be get from redux
const user= false
  if (user) {
    return <DashboardStack />;
  } else {
    return <AuthStack />;
  }
};

export default RootStack;
