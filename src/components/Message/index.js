import React from "react";
import { View, Text } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Message({ message: { id, text, createdAt, user } }) {
  const isMyMessage = () => {
    return user.id === "u1";
  };

  return (
    <View
      className={`theContainer bg-white m-[5px] p-[10px] rounded-[10px] max-w-[80%] self-start ${
        isMyMessage() && "bg-[#DCF8C5] self-end"
      }`}
    >
      <Text>{text}</Text>
      <Text className="theTime text-[#808080] self-end">
        {dayjs(createdAt).fromNow(true)}
      </Text>
    </View>
  );
}
