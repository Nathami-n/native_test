import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';

import * as SecureStore from "expo-secure-store";
import { useAuth } from '@clerk/clerk-expo';


const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },

  async saveToken(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch(err) {
      return;
    }
  }
}
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require('../assets/fonts/Montserrat-Regular.ttf'),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf")
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
  if(!publishableKey) {
    throw new Error("add EXPO_CLERK_PUBLISHABLE_KEY");
  }

  const {isLoaded, isSignedIn} = useAuth();
  const router = useRouter();
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/login"  options={{
          title: "Log in or sign up",
         headerTitleStyle: {
          fontFamily: "mon-sb"
         },
          presentation: "modal",
          headerLeft: () => {
            return <TouchableOpacity onPress={() =>{
              router.back();
            }}>
              <Ionicons name="close-outline" size={28}/>
            </TouchableOpacity>
          }
        }}/>

        <Stack.Screen name="listing/[id]" 
        options={{
          headerTitle: ""
        }}
        />
        <Stack.Screen name="(modals)/booking" 
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerLeft: () => {
            return <TouchableOpacity onPress={() =>{
              router.back();
            }}>
              <Ionicons name="close-outline" size={28}/>
            </TouchableOpacity>
          }
        }}
        
        />
      </Stack>
  );
}
