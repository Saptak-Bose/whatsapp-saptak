import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ChatsScreen from "./src/screens/ChatsScreen";

export default function App() {
  return (
    <View className="flex-1 bg-white justify-center pt-[40px]">
      <ChatsScreen />
      <StatusBar style="auto" />
    </View>
  );
}
