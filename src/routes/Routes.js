/*
  Routes
*/
import React from 'react';

import AuthRoutes from './AuthRoutes';
import DefaultRoutes from './DefaultRoutes';
import StackNavigator from './StackNavigator';

export default function AppRoutes() {
  return <DefaultRoutes />;
}
