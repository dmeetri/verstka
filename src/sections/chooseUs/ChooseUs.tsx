import "./ChooseUs.css"
import ChooseCard from "../../components/ui/choose_card/choose_card"

export const ChooseUs = () => {
    return(
        <section className="choose">
            <div className="container">
                <div className="choose-content">
                    <h2>Why choose us</h2>

                    <div className="choose-us-grid">
                        <ChooseCard 
                            title="Subnetix" 
                            text="Tap into the burgeoning Bittensor subnet ecosystem. Participate in a vibrant derivatives market, fueling innovation and growth for Tensor Processing Unit." 
                            img="/icons/chus/icon_1.svg" />
                        <ChooseCard 
                            title="Space" 
                            text="Access the processing power you need, when you need it. Scale projects seamlessly with a decentralized marketplace of GPUs, TPUs, and cutting-edge LPUs." 
                            img="/icons/chus/icon_2.svg" variant="dark" />
                        <ChooseCard 
                            title="Craft" 
                            text="Accelerate development and deployment with our intuitive, no-code AI application-building platform, empowering users of all skill levels." 
                            img="/icons/chus/icon_3.svg" />
                        <ChooseCard 
                            title="Foundry" 
                            text="We use blockchain technology to keep your data, payment funds, and usage secure. It adds an extra layer of protection to your information is safe and trustworthy." 
                            img="/icons/chus/icon_4.svg" variant="dark" />
                        <ChooseCard 
                            title="Nodes" 
                            text="Access the processing power you need when you need it. Scale projects seamlessly with a decentralized marketplace of GPUs, TPUs, and cutting-edge LPUs." 
                            img="/icons/chus/icon_5.svg" />
                        <ChooseCard 
                            title="GPUs" 
                            text="Tap into the burgeoning Bittensor subnet ecosystem. Participate in a vibrant derivatives market, fueling innovation and growth for Tensor Processing Unit." 
                            img="/icons/chus/icon_6.svg" variant="dark" />
                    </div>
                </div>
            </div>
        </section>
    );
}