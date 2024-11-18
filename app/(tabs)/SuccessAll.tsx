import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { AppButton } from "./AppButton";

const SuccessAll = () => {
  return (
    <SafeAreaView className="flex justify-center items-center mx-5">
      <View className="mb-28">
        <Image
          source={require("../../assets/images/success.png")}
          style={[styles.image, { resizeMode: "cover" }]}
        />
      </View>
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
          className="text-lg font-semibold text-[#B6B6B6] text-center mb-16"
        >
          Congratulations! You have been successfully authenticated svsagasas
        </Text>
        <View>
          <AppButton title="Confirm" size="sm" backgroundColor="#FF8D4D" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessAll;

const styles = StyleSheet.create({
  image: {
    // padding: 10,
    height: 106,
    width: 106,
    marginTop: 100,
  },
});
