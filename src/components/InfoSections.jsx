import React from "react";
import ExpandableSection from "./ExpandableSection";
import SelfieIcon from "../icons/SelfieIcon";
import VarietyIcon from "../icons/VarietyIcon";
import RecencyIcon from "../icons/RecencyIcon";
import ClearIcon from "../icons/ClearIcon";

const infoData = [
  {
    title: "Selfies",
    icon: SelfieIcon,
    content: "Upload frontal selfies that are well-lit and taken at eye-level.",
  },
  {
    title: "Variety",
    icon: VarietyIcon,
    content: "Upload photos in different outfits and backgrounds.",
  },
  {
    title: "Recency",
    icon: RecencyIcon,
    content:
      "Upload recent photos from the last 6 months that feature similar hairstyles and lengths.",
  },
  {
    title: "Clear",
    icon: ClearIcon,
    content:
      "Upload photos taken from a good distance, ideally taken from the chest or waist up.",
  },
];

const InfoSections = () => (
  <div className="info-sections">
    {infoData.map(({ title, icon, content }) => (
      <ExpandableSection key={title} title={title} icon={icon}>
        <p>{content}</p>
      </ExpandableSection>
    ))}
  </div>
);

export default InfoSections;
