import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { AppButton } from "@/app/(tabs)/AppButton";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const CELL_COUNT = 4;
import stylesCustom from "./stylesCustom";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { Platform } from "react-native";

const Code = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const router = useRouter();

  const handlePress = () => {
    router.push("/(tabs)/Success");
  };

  return (
    <SafeAreaView className="mx-5">
      <View className="mt-12">
        <Icon
          onPress={() => router.push("/(tabs)")}
          name="arrow-left"
          size={25}
          color="#CECECE"
        />
      </View>
      <Text
        className="mt-10 mb-2 text-2xl text-black font-bold"
        style={{
          fontFamily: Platform.select({
            android: "Poppins-Medium",
            ios: "Poppins-Black",
          }),
        }}
      >
        Verification Code
      </Text>
      <View className="w-80 mb-10">
        <Text
          style={{
            fontFamily: Platform.select({
              android: "Poppins-Medium",
              ios: "Poppins-Black",
            }),
          }}
          className="text-lg font-medium text-[#B6B6B6]"
        >
          We have sent the verification code to your email address
        </Text>
      </View>
      <View className="mb-20">
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={stylesCustom.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[stylesCustom.cell, isFocused && stylesCustom.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <AppButton
        title="Confirm"
        size="sm"
        backgroundColor="#FF8D4D"
        onPress={handlePress}
      />
    </SafeAreaView>
  );
};

export default Code;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 10,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
