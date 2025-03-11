import React from "react";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";

const StarRatingComponent = ({ rating, handleRatingChange, isInteractive }) => {
  return [1, 2, 3, 4, 5].map((star) => (
    <Button
      className={`p-2 rounded-full transition-colors ${
        star <= rating ? "text-yellow-500" : "text-black"
      } ${
        isInteractive
          ? "hover:bg-primary hover:text-primary-foreground"
          : "pointer-events-none"
      }`}
      variant="outline"
      size="icon"
      key={star}
      onClick={
        isInteractive && handleRatingChange
          ? () => handleRatingChange(star)
          : undefined
      }
    >
      <StarIcon
        className={`w-6 h-6 ${
          star <= rating ? "fill-yellow-500" : "fill-black"
        }`}
      />
    </Button>
  ));
};

export default StarRatingComponent;
