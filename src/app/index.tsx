import * as React from 'react';
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from "./Screens/InicioScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import ConfigScreen from "./Screens/ConfigScreen";
import DuvidasScreen from "./Screens/DuvidasScreen";
import TreinoScreen from "./Screens/TreinoScreen";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { ThemeProvider } from '../assets/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../assets/ThemeContext';
import { useCallback } from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {

  const { theme } = useTheme();
  let back: string

  if (theme === "dark") {
    back = "#00050A"
  } else if (theme === "light") {
    back = "#FFF"
  }
  
  let iconName: string;
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          "tabBarActiveTintColor": "#60F558",
          "tabBarInactiveTintColor": "gray",
          tabBarStyle: {backgroundColor: back},
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Duvidas') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Treino') {
              iconName = focused ? 'barbell' : 'barbell-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Duvidas" component={DuvidasScreen} />
        <Tab.Screen name="Treino" component={TreinoScreen} />
      </Tab.Navigator>
  );
}



export default function App(){
  
  SplashScreen.preventAutoHideAsync();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [fontsLoaded] = useFonts({
    'Afacad': require('../assets/fonts/Afacad-VariableFont_wght.ttf'),
    'PoppinsLight': require('../assets/fonts/Poppins-Light.ttf'),
    'PoppinsMedium': require('../assets/fonts/Poppins-Medium.ttf'),
    'PoppinsBold': require('../assets/fonts/Poppins-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }

    return (
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <ThemeProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
              <>
                <Stack.Screen name="Main" component={MyTabs} />
                <Stack.Screen name="Config" component={ConfigScreen} />
                <Stack.Screen name="Treino" component={TreinoScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="Welcome">
                {props => <WelcomeScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
                <Stack.Screen name="Login">
                  {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
                <Stack.Screen name="SignUp">
                {props => <SignUpScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </ThemeProvider>
    </View>
  );
};