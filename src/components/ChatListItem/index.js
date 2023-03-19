import React from "react";
import { View, Text, Image } from "react-native";

export default function ChatListItem() {
  return (
    <View className="theContainer flex flex-row mx-[10px] my-[5px] h-[70px]">
      <Image
        className="theImage w-[60px] h-[60px] rounded-full mr-[10px]"
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/storage-15b1a.appspot.com/o/CleverSap%20Profile.jpg?alt=media&token=ad2b0772-c4f9-4321-8e83-ebcc2735016e",
        }}
      />

      <View className="theContent flex-1 border-b-[0.4px] border-[#d3d3d3]">
        <View className="theRow flex flex-row mb-[5px]">
          <Text numberOfLines={1} className="theName flex-1 font-bold">
            Saptak
          </Text>
          <Text className="theSubtitle text-[#808080]">8:30</Text>
        </View>

        <Text numberOfLines={2} className="theSubtitle text-[#808080]">
          Hello there
        </Text>
      </View>
    </View>
  );
}
