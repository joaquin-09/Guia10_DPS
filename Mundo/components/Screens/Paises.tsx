import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaPaises from './ListaPaises';
import DetallePais from './DetallePais';

const Stack = createNativeStackNavigator();

const Paises = () => {

  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Paises"
        component={ListaPaises}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="DetallePais"
        component={DetallePais}
        options={{
          title: 'Detalle del país',
        }}
      />

    </Stack.Navigator>

  );
};

export default Paises;