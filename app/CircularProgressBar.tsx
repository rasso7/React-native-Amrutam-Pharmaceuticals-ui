import React from "react";
import { View, Text } from "react-native";
import { Svg, Circle } from "react-native-svg";

const CircularProgressBar = ({
  progress = 50,
  size = 100,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View className="items-center justify-center">
      <Svg height={size} width={size}>
        {/* Background Circle */}
        <Circle
          stroke="#d1d5db" // Tailwind gray-300
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <Circle
          stroke="#806BDA" // Tailwind purple-500
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start from top
        />
      </Svg>
      {/* Progress Text */}
      <Text className="absolute text-lg font-bold text-white">{progress}%</Text>
    </View>
  );
};

export default CircularProgressBar;
