import React from "react";
import { ImageBackground, FlatList } from "react-native";
import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";
import Message from "../components/Message";

export default function ChatScreen() {
  return (
    <ImageBackground source={bg} className="theBg flex-1">
      <FlatList
        className="theList p-[10px]"
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </ImageBackground>
  );
}
