import { View, Text } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { phone, signIn } = useLocalSearchParams<{
    phone: string;
    signIn: string;
  }>();
  const [code, setCode] = useState("");
  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
