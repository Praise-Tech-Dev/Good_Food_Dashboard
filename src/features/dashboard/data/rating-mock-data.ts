import type { RatingData } from "../types/rating-types";

export const Rating_MockData: RatingData[] = [
  {
    id: "hygiene",
    label: "Hygiene",
    percentage: 85,
    color: {
      border: "border-[#6463D6]",
      bg: "bg-[#6463D6]/80",
      text: "text-[#FFFFFF]",
    },
  },
  {
    id: "food-taste",
    label: "Food Taste",
    percentage: 85,
    color: {
      border: "border-[#F99C30]",
      bg: "bg-[#F99C30]/80",
      text: "text-[#FFFFFF]",
    },
  },
  {
    id: "packaging",
    label: "Packaging",
    percentage: 92,
    color: {
      border: "border-[#2FBFDE]",
      bg: "bg-[#2FBFDE]/80",
      text: "text-[#FFFFFF]",
    },
  },
];