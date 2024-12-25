import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

// Define types for the props
interface RoutineCardProps {
  title: string;
  sunflowerCount: number;
  items: string;
  progress: number;
  image: any; // You can replace `any` with a more specific type like `ImageSourcePropType`
}

const RoutineCard: React.FC<RoutineCardProps> = ({
  title,
  sunflowerCount,
  items,
  progress,
  image,
}) => (
  <TouchableOpacity className="bg-white rounded-lg border border-border2 shadow w-[160px] h-[280px] m-2">
    <View>
      <View className="p-2 rounded-lg">
        <Image source={image} className="w-full h-[150px]" />
      </View>

      <View className="p-2">
        <View className="flex flex-row justify-between items-center">
          <Text
            className="text-lg font-semibold flex-shrink"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <View className="flex-row items-center">
            <Text className="text-base font-semibold">{sunflowerCount}</Text>
            <Text className="text-yellow-500 text-base mr-1">🌻</Text>
          </View>
        </View>

        <Text className="text-sm text-light-gray mt-2" numberOfLines={1}>
          {items}
        </Text>
        <Progress.Bar
          progress={progress}
          width={null}
          color="#3A643B"
          unfilledColor="#e0e0e0"
          borderWidth={0}
          className="mt-3"
        />
        <Text className="text-xs text-light-gray mt-2">
          {Math.round(progress * 100)}% Finished
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default RoutineCard;
