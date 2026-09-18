import { createStackNavigator } from 'expo-router/js-stack';

import DetallePais from './DetallePais';
import ListaPaises from './ListaPaises';
import type { PaisesStackParamList } from './types';

const Stack = createStackNavigator<PaisesStackParamList>();

const Paises = () => {
  return (
    <Stack.Navigator initialRouteName="Paises">
      <Stack.Screen name="Paises" component={ListaPaises} options={{ headerShown: false }} />
      <Stack.Screen
        name="DetallePais"
        component={DetallePais}
        options={{ title: 'Detalle del país' }}
      />
    </Stack.Navigator>
  );
};

export default Paises;