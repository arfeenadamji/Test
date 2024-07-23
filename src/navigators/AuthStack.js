import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpCode from '../Screens/OtpCode';
import UserName from '../Screens/UserName';
import Gender from '../Screens/Gender';
import login from '../Screens/Login';


const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    // initialRouteName='OtpCode'
    >
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="OtpCode" component={OtpCode} />
      <Stack.Screen name="UserName" component={UserName} />
      <Stack.Screen name="Gender" component={Gender} />
     </Stack.Navigator >
  )
}

export default AuthStack