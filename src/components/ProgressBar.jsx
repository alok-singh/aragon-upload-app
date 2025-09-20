import { MIN_PHOTO_REQUIRED } from '../config/vars';
import './ProgressBar.css';

const ProgressBar = ({ value, max }) => (
  <div className="progress-bar">
    <div
      className={`progress-bar-fill ${value > MIN_PHOTO_REQUIRED ? "accepted" : ""}`}
      style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
    />
  </div>
);

export default ProgressBar;
