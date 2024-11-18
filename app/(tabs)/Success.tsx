import { Text, SafeAreaView, View, Platform } from "react-native";
import React from "react";
import { AppButton } from "./AppButton";
import { useRouter } from "expo-router";

const Success = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/(tabs)/SuccessAll");
  };
  return (
    <SafeAreaView className="flex justify-center flex-1 mx-5">
      <View>
        <Text
          style={{
            fontFamily: Platform.select({
              android: "Poppins-Medium",
              ios: "Poppins-Black",
            }),
          }}
          className="text-xl font-bold mb-4 text-center"
        >
          Success!
        </Text>
        <Text
          style={{
            fontFamily: Platform.select({
              android: "Poppins-Medium",
              ios: "Poppins-Black",
            }),
          }}
          className="text-lg font-semibold text-[#B6B6B6] text-center mb-14"
        >
          Congratulations! You have been successfully authenticated svsagasas
        </Text>
        <AppButton
          title="Confirm"
          size="sm"
          backgroundColor="#FF8D4D"
          onPress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
};

export default Success;
