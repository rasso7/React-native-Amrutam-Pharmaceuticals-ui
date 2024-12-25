import { Heart } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ProductlistProps {
  title: string;
  subtitle: string;
  duration: string;
  reminders: string;
  image: any; // You can be more specific with the type of the image if needed
}

const Productlist: React.FC<ProductlistProps> = ({
  title,
  subtitle,
  duration,
  reminders,
  image,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <View className="w-[160px] bg-white rounded-2xl border border-light-gray p-3 shadow-sm">
      {/* Image container with heart icon */}
      <View>
        <View className="relative mb-3">
          <Image
            source={image}
            className="w-full h-[180px] rounded-xl"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={toggleFavorite}
            className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full items-center justify-center"
          >
            <Heart
              size={20}
              color={isFavorite ? "#FF0000" : "#000000"}
              fill={isFavorite ? "#FF0000" : "none"}
            />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="space-y-2">
          <Text className="text-base font-semibold text-gray-900">{title}</Text>
          <Text className="text-gray-600">({subtitle})</Text>

          {/* Duration */}
          <View className="flex-row items-center space-x-2 mt-2">
            <Image
              source={require("@/assets/images/calendar.png")}
              className="w-4 h-4"
              resizeMode="contain"
            />
            <Text className="text-sm text-gray-500">{duration}</Text>
          </View>

          {/* Reminders */}
          <View className="flex-row items-center space-x-2 mt-1">
            <Image
              source={require("@/assets/images/todo.png")}
              className="w-4 h-4"
              resizeMode="contain"
            />
            <Text className="text-sm text-gray-500">{reminders}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Productlist;
