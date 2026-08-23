export interface RatingData {
  id: string;
  label: string;
  percentage: number;
  color: {
    border: string;
    bg: string;
    text: string;
  };
}