import React from "react";
import PhotoRestrictionItem from "./PhotoRestrictionItem";
import NoLowQualityIcon from "../icons/NoLowQualityIcon";
import NoRevealingClothesIcon from "../icons/NoRevealingClothesIcon";
import NoAccessoriesIcon from "../icons/NoAccessoriesIcon";
import NoUnnaturalAnglesIcon from "../icons/NoUnnaturalAnglesIcon";
import "./PhotoRestrictions.css";

const restrictions = [
  {
    icon: NoLowQualityIcon,
    title: "No Low-Quality / AI Photos",
    description:
      "Don't upload photos that are blurry, too dark/bright, or AI-generated.",
  },
  {
    icon: NoRevealingClothesIcon,
    title: "No Revealing Clothes",
    description:
      "Don't upload photos with low necklines, or in skimpy outfits.",
  },
  {
    icon: NoAccessoriesIcon,
    title: "No Accessories",
    description:
      "Avoid photos of you with hats, sunglasses, headphones, lanyards, etc.",
  },
  {
    icon: NoUnnaturalAnglesIcon,
    title: "No Unnatural Angles",
    description:
      "Avoid photos taken from the side, or where you're looking away.",
  },
];

const PhotoRestrictions = () => (
  <section className="photo-restrictions">
    <h2>Photo Restrictions</h2>
    <div className="photo-restrictions-list">
      {restrictions.map((item, idx) => (
        <PhotoRestrictionItem key={idx} {...item} />
      ))}
    </div>
  </section>
);

export default PhotoRestrictions;
