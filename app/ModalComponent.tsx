import { Clock, Ellipsis } from "lucide-react-native";
import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  TouchableOpacity,
} from "react-native";

interface ModalComponentProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 255,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 300,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  useEffect(() => {
    if (isVisible) slideUp();
  }, [isVisible]);

  return (
    isVisible && (
      <Pressable
        onPress={slideDown}
        className="absolute inset-0 bg-black/50 justify-end"
      >
        <Pressable style={{ flex: 1 }} className="h-1/2">
          <Animated.View
            style={{ transform: [{ translateY: slide }] }}
            className="w-full h-full bg-white rounded-t-2xl p-5 pt-7"
          >
            {/* Header Section */}
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row justify-center items-center py-2">
                <Clock size={12} color="#3A643B" />
                <Text className="text-lg text-dark-green font-bold px-1">
                  18 min left
                </Text>
              </View>

              <View>
                <Ellipsis
                  size={20}
                  color="#000000"
                  style={{ transform: [{ rotate: "90deg" }] }}
                />
              </View>
            </View>

            {/* Routine Details */}
            <View className="mt-4">
              <Text className="text-xl font-semibold text-dark">
                Amrutam Skinkey Malt
              </Text>
              <Text className="text-gray">Skin Care Routine</Text>
              <Text className="mt-4 text-dark text-xl font-semibold">
                Usage Quantity:{" "}
                <Text className="font-semibold text-dark">1 tbs</Text>
              </Text>
              <View className="flex-row items-center space-x-2 mt-3">
                <Text className=" bg-light-green px-3 py-1 rounded-md">
                  Beforemeal
                </Text>
                <Text className="px-2">
                  <Text className="text-dark-green">8:00 am</Text>{" "}
                  {/* Apply one color */}
                  <Text className="text-gray-500"> | </Text>{" "}
                  {/* Optional separator color */}
                  <Text className="text-dark">9:00 pm</Text>{" "}
                  {/* Apply another color */}
                </Text>
              </View>
            </View>

            {/* Buttons */}
            <View className="mt-6">
              <TouchableOpacity className="bg-dark-green py-3 rounded-md items-center">
                <Text className="text-white font-semibold">
                  Mark as Complete
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="border-2 border-gray-300 py-3 rounded-md items-center mt-3">
                <Text className="text-dark-green font-semibold">
                  Snooze for 10 min
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 rounded-md items-center mt-3">
                <Pressable onPress={slideDown}>
                  <Text className="text-dark-green font-semibold">Skip</Text>
                </Pressable>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Pressable>
      </Pressable>
    )
  );
};

export default ModalComponent;
