import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";

const chat = {
  id: "1",
  user: {
    image:
      "https://firebasestorage.googleapis.com/v0/b/storage-15b1a.appspot.com/o/CleverSap%20Profile.jpg?alt=media&token=ad2b0772-c4f9-4321-8e83-ebcc2735016e",
    name: "Saptak",
  },
  lastMessage: {
    text: "Okay",
    createdAt: "18:30",
  },
};

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}
