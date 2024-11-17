import { Image, StyleSheet, Platform, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import OtpCode from "@/components/screen/OtpCode";
import "../../global.css";

export default function HomeScreen() {
  return <OtpCode />;
  // <View className="mb-1">
  // </View>;
}
