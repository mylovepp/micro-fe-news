import React from 'react';
import { Text } from "react-native";

import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export type TabsParamList = {
  HomeNavigator: undefined;
  SearchNavigator: undefined;
  AccountNavigator: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeNavigator"
        component={()=>{return <Text>Home</Text>}}
        options={{
          title: 'Home',
          tabBarIcon: 'home-battery',
        }}
      />
      <Tabs.Screen
        name="SearchNavigator"
        component={()=>{return <Text>Search</Text>}}
        options={{
          title: 'Screen',
          tabBarIcon: 'magnify',
        }}
      />
      <Tabs.Screen
        name="AccountNavigator"
        component={()=>{return <Text>Account</Text>}}
        options={{
          title: 'Account',
          tabBarIcon: 'account',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
