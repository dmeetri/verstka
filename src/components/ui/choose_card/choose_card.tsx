import "./choose_card.css"

export default function ChooseCard({ variant = "green"}) {
    const bg = variant === "green" ? "choose-card-green" : "shoose-card-dark";

    return(
        <div className={`${bg} shoose_us_card`}>
            
        </div>
    );
}