import { StyleSheet, SafeAreaView } from 'react-native';
import { AuthContextProvider } from './app/context/AuthContext';
import { TaskProvider } from "./app/context/TaskContext";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from './app/navigation/BottomNavigatiom';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.appjsContainer}>
        <AuthContextProvider>
          <TaskProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </TaskProvider>
        </AuthContextProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );

}

const styles = StyleSheet.create({
  appjsContainer: {
    flex: 1,
    backgroundColor: "#F8F993",
  }
})
