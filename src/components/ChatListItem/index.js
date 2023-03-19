import React from "react";
import { View, Text, Image } from "react-native";

export default function ChatListItem({ chat: { id, user, lastMessage } }) {
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const currentDate = new Date();

    const diff = currentDate.getTime() - date.getTime();
    const diffSeconds = diff / 1000;
    const diffMinutes = diffSeconds / 60;
    const diffHours = diffMinutes / 60;
    const diffDays = diffHours / 24;
    const diffMonths = diffDays / 30;
    const diffYears = diffDays / 365;

    if (diffSeconds < 60) {
      return "just now";
    } else if (diffMinutes < 60) {
      return `${Math.floor(diffMinutes)}m ago`;
    } else if (diffHours < 24) {
      return `${Math.floor(diffHours)}h ago`;
    } else if (diffDays === 1) {
      return "yesterday";
    } else if (diffDays < 7) {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return daysOfWeek[date.getDay()];
    } else if (diffMonths < 1) {
      return `${Math.floor(diffDays / 7)}w ago`;
    } else if (diffMonths < 2) {
      return "a month ago";
    } else if (diffMonths < 12) {
      return `${Math.floor(diffMonths)}m ago`;
    } else {
      return `${Math.floor(diffYears)}y ago`;
    }
  };

  return (
    <View className="theContainer flex flex-row mx-[10px] my-[5px] h-[70px]">
      <Image
        className="theImage w-[60px] h-[60px] rounded-full mr-[10px]"
        source={{
          uri: user.image,
        }}
      />

      <View className="theContent flex-1 border-b-[0.4px] border-[#d3d3d3]">
        <View className="theRow flex flex-row mb-[5px]">
          <Text numberOfLines={1} className="theName flex-1 font-bold">
            {user.name}
          </Text>
          <Text className="theSubtitle text-[#808080]">
            {formatDate(lastMessage.createdAt)}
          </Text>
        </View>

        <Text numberOfLines={2} className="theSubtitle text-[#808080]">
          {lastMessage.text}
        </Text>
      </View>
    </View>
  );
}
