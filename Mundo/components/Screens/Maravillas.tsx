import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import ListaMaravillas from './ListaMaravillas';
import DetalleMaravillas from './DetalleMaravillas';

const Stack = createNativeStackNavigator();

const Maravillas = () => {

  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Maravillas"
        component={ListaMaravillas}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Consejos"
        component={DetalleMaravillas}
        options={{
          title: 'Consejos',
        }}
      />

    </Stack.Navigator>

  );
};

export default Maravillas;