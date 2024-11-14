import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export default function IconButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
        <Ionicons name="home" size={24} color="#fff"/>
    </Pressable>
    )
}
