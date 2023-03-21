import React from "react";
import dayjs from "dayjs";
import { View, Text, Image, StyleSheet } from "react-native";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function ChatListItem({ chat: { id, user, lastMessage } }) {
  return (
    <View className="theContainer flex flex-row mx-[10px] my-[5px] h-[70px]">
      <Image
        className="theImage w-[60px] h-[60px] rounded-full mr-[10px]"
        source={{
          uri: user.image,
        }}
      />

      <View style={styles.theContent} className="flex-1 border-[#d3d3d3]">
        <View className="theRow flex flex-row mb-[5px]">
          <Text numberOfLines={1} className="theName flex-1 font-bold">
            {user.name}
          </Text>
          <Text className="theSubtitle text-[#808080]">
            {dayjs(lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>

        <Text numberOfLines={2} className="theSubtitle text-[#808080]">
          {lastMessage.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  theContent: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
