import BackIcon from "../icons/BackIcon";

import "./BackButtonSection.css";

const BackButtonSection = () => {
  // flex flex-row items-center gap-1 gap-x-2 pr-5 rounded-md border border-solid border-neutral-200 bg-white py-2 pl-3 hover:bg-lighterGray active:scale-90 undefined
  return (
    <div className="back-button-section">
      <button className="back-button">
        <BackIcon />
        <div className="button-text">Back</div>
      </button>
    </div>
  );
};

export default BackButtonSection;
