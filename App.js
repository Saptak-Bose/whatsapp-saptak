import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <ChatListItem />
      <StatusBar style="auto" />
    </View>
  );
}
