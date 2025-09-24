import React from "react";
import "./roadmap_card.css";

interface RoadMapCardProps {
  variant: "green" | "white" | "none";
  number: string;
  textLines: string[];
}

const RoadMapCard: React.FC<RoadMapCardProps> = ({
  variant,
  number,
  textLines,
}) => {
  const bg =
    variant === "green"
      ? "road-map-color-green"
      : variant === "white"
      ? "road-map-color-white"
      : "road-map-color-none";

  return (
    <div className="roadmap-card">
      <div className={`roadmap-number ${bg}`}>
        <h2>{number}</h2>
      </div>

      <div className="roadmap-text">
        {textLines.map((line, index) => (
          <div className="roadmap-block-text flex" key={index}>
            <img src="/icons/galochka.svg" alt="icon" />
            <p className="text-reggular">{line}</p>
            {index < textLines.length - 1 && <br />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMapCard;
