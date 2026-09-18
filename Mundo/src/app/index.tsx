import { Ionicons } from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
} from 'expo-router/js-tabs';

import Maravillas from '@/components/Screens/Maravillas';
import Paises from '@/components/Screens/Paises';

type RootTabParamList = {
  Paises: undefined;
  Maravillas: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Paises') {
            iconName = 'earth';
          } else if (route.name === 'Maravillas') {
            iconName = 'map';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Paises" component={Paises} />
      <Tab.Screen name="Maravillas" component={Maravillas} />
    </Tab.Navigator>
  );
}