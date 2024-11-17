import { View, Text, ScrollView, StyleSheet } from "react-native";
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

const Code = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const router = useRouter();

  return (
    <ScrollView className="mx-5">
      <View className="mt-12">
        <Icon
          onPress={() => router.push("/(tabs)")}
          name="arrow-left"
          size={25}
          color="#CECECE"
        />
      </View>
      <Text className="mt-10 mb-2 text-2xl text-black">Verification Code</Text>
      <View className="w-52 mb-10">
        <Text>We have sent the verification code to your email address</Text>
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

      <AppButton title="Confirm" size="sm" backgroundColor="#FF8D4D" />
    </ScrollView>
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