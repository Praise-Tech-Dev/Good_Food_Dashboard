import type { MostOrderedFood } from "../types/most-ordered-food.types";

import saladImg from "../../../assets/most-ordered/salad.png"
import chickenNoodles from "../../../assets/most-ordered/chicken-noodles.png"
import smoothieImg from "../../../assets/most-ordered/smoothie.png"
import chickenWings from "../../../assets/most-ordered/hot-chicken-wings.png"

export const Most_Ordered_Mock_Data: MostOrderedFood[] = [
  {
    id: "1",
    name: "Fresh Salad Bowl",
    price: 45000,
    image: saladImg,
  },
  {
    id: "2",
    name: "Chicken Noodles",
    price: 75000,
    image: chickenNoodles,
  },
  {
    id: "3",
    name: "Smoothie Fruits",
    price: 45000,
    image: smoothieImg,
  },
  {
    id: "4",
    name: "Hot Chicken Wings",
    price: 45000,
    image: chickenWings,
  },
];
