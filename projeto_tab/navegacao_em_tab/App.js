import { NavigationContainer } from 'npx create-expo-app nome-projeto --template blank';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './telas/Tela_Home.js'
import Sobre from './telas/Tela_Sobre.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Sobre' component={Sobre}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
