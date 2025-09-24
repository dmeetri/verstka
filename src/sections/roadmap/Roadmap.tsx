import "./Roadmap.css";
import RoadMapCard from "../../components/ui/roadmap_card/roadmap_card";

export const Roadmap = () => {
  const lines_1 = [
    "Launch NodeAI Website & Dapp",
    "$GPU Fair Launch",
    "Stake to Earn Rewards",
    "Build & Grow Community",
    "Referral Program",
  ];
  const lines_2 = [
    "Launch NodeAI Website & Dapp",
    "$GPU Fair Launch",
    "Stake to Earn Rewards",
    "Build & Grow Community",
    "Referral Program",
  ];
  const lines_3 = [
    "Launch NodeAI Website & Dapp",
    "$GPU Fair Launch",
    "Stake to Earn Rewards",
    "Build & Grow Community",
    "Referral Program",
  ];
  const lines_4 = [
    "Launch NodeAI Website & Dapp",
    "$GPU Fair Launch",
    "Stake to Earn Rewards",
    "Build & Grow Community",
    "Referral Program",
  ];

  return (
    <section className="roadmap">
      <div className="container">
        <div className="road-content">
          <h2>Roadmap</h2>

          <div className="road-map-crads flex">
            <RoadMapCard number="01" textLines={lines_1} variant="white" />
            <RoadMapCard number="02" textLines={lines_2} variant="white" />
            <RoadMapCard number="03" textLines={lines_3} variant="green" />
            <RoadMapCard number="04" textLines={lines_4} variant="none" />
          </div>
        </div>
      </div>
    </section>
  );
};
