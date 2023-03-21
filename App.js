import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ChatScreen from "./src/screens/ChatScreen";
import ChatsScreen from "./src/screens/ChatsScreen";

export default function App() {
  return (
    <View className="theContainer flex-1 bg-white justify-center py-[40px]">
      {/* <ChatsScreen /> */}
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
}
