import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import PostsScreen from "./src/screens/PostsScreen";
import PostDetailsScreen from "./src/screens/PostDetailsScreen";
import { RootStackParamList } from "./src/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Posts" component={PostsScreen} />
          <Stack.Screen
            name="PostDetails"
            component={PostDetailsScreen}
            options={{ title: "Post Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
