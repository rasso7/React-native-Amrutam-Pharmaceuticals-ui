import React from "react";
import { View, Text, Image } from "react-native";
import { Clock, ChevronRight } from "lucide-react-native";

interface ListItemProps {
  item: {
    image: any;
    title: string;
    type: string;
    time: string;
    noofsun: string;
    sun: any; // The sun can be an image or empty
  };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <View className="p-x-2 pt-4 rounded-lg mb-2">
      {/* Image Section */}
      <View className="flex-row items-center">
        <Image source={item.image} className="w-12 h-12 rounded-md" />

        {/* Text Content */}
        <View className="ml-4 flex-1">
          <Text className="text-dark text-base font-bold">{item.title}</Text>
          <View className="flex-row items-center mt-1">
            <Text className="text-light-gray text-sm">{item.type}</Text>
            {/* Use Clock Icon */}
            <Clock size={16} color="#3A643B" style={{ marginLeft: 8 }} />
            <Text className="text-dark text-sm ml-1">{item.time}</Text>
          </View>
        </View>

        {/* Sun Section */}
        {item.sun && (
          <View className="flex-row items-center ml-4">
            {item.noofsun && (
              <Text className="text-dark text-lg ml-2">{item.noofsun}</Text>
            )}
            <Image source={item.sun} className="w-6 h-6" />
          </View>
        )}

        {/* Chevron Icon */}
        <ChevronRight size={25} color="#101018" style={{ marginLeft: 16 }} />
      </View>

      {/* Light Gray Line After Each Item */}
      <View className="border-b border-light-gray mt-2" />
    </View>
  );
};

export default ListItem;
