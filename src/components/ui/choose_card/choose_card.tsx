import "./choose_card.css";

export default function ChooseCard({
  variant = "green",
  img = "",
  title = "",
  text = "",
}) {
  const bg = variant === "green" ? "choose-card-green" : "shoose-card-dark";

  return (
    <div className={`${bg} shoose_us_card`}>
      <div className="shuc-title flex">
        <img src={img} alt="choose card icon" width={50} />
        <h3 className="">{title}</h3>
      </div>

      <p className="text-reggular">{text}</p>
    </div>
  );
}
