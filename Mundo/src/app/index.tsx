import React from 'react';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  NavigationContainer,
} from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import Paises from '@/components/Screens/Paises';
import Maravillas from '@/components/Screens/Maravillas';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {

  return (

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({

          headerShown: false,

          tabBarIcon: ({
            color,
            size,
          }) => {

            let iconName: any = 'home';

            if (route.name === 'Paises') {
              iconName = 'earth';
            }

            if (route.name === 'Maravillas') {
              iconName = 'map';
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );

          },

        })}
      >

        <Tab.Screen
          name="Paises"
          component={Paises}
        />

        <Tab.Screen
          name="Maravillas"
          component={Maravillas}
        />

      </Tab.Navigator>

    </NavigationContainer>

  );
}