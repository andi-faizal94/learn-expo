import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Platform } from "react-native";

import { AppButton } from "@/app/(tabs)/AppButton";

const OtpCode = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handlePress = () => {
    router.push("/(tabs)/Code");
  };

  return (
    <SafeAreaView>
      <View className="flex justify-center items-center mb-20">
        <Image
          source={require("../../assets/images/Image.png")}
          style={[styles.image, { resizeMode: "contain" }]}
        />
      </View>
      <View className="mx-5 mb-12">
        <Text
          style={{
            fontFamily: Platform.select({
              android: "Poppins-Medium",
              ios: "Poppins-Black",
            }),
          }}
          className="text-xl font-bold mb-4"
        >
          OTP Verification
        </Text>
        <Text
          style={{
            fontFamily: Platform.select({
              android: "Poppins-Medium",
              ios: "Poppins-Black",
            }),
          }}
          className="text-lg font-semibold text-[#B6B6B6]"
        >
          Enter email and phone number to send one time Password
        </Text>
      </View>
      <View className="mx-5 mb-10">
        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>

      <View className="mx-5 mb-16">
        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
          }}
        />
      </View>

      <View className="mx-5 ">
        <AppButton
          title="Continue"
          size="sm"
          backgroundColor="#FF8D4D"
          onPress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    padding: 10,
    height: 209,
    width: 246,
    marginTop: 100,
  },
});
export default OtpCode;
