import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function InputBox() {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("Sending a new message >>>", newMessage);
    setNewMessage("");
  };

  return (
    <View className="theContainer flex flex-row bg-[#f5f5f5] py-[7px] space-x-[10px] px-[10px] items-center">
      <AntDesign name="plus" size={20} color="cornflowerblue" />

      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder="Type your message..."
        multiline
        className="theInput flex-1 bg-white p-[5px] px-[10px] rounded-full border-[#d3d3d3] text-left text-[16px]"
        style={{ borderWidth: StyleSheet.hairlineWidth }}
      />

      <MaterialIcons
        name="send"
        size={16}
        color="white"
        style={styles.theSend}
        onPress={onSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  theSend: {
    backgroundColor: "cornflowerblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
