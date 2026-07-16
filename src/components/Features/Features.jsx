import { useEffect, useState } from "react";
import "./Features.css";
import icon from "../../assets/icons/star.svg";
import appScreen from "../../assets/app/home.svg";

import {
    Apple,
    Droplets,
    ChartColumn,
    User
} from "lucide-react";



export default function Features(){
  const messages = [

"👋 Hello! I'm Poshana.",

"🥗 Ready to build healthier habits?",

"💧 Don't forget to drink water!",

"❤️ Let's improve your wellness today.",

"✨ Your journey starts here."

];

const [currentMessage,setCurrentMessage]=useState(0);

useEffect(()=>{

const interval=setInterval(()=>{

setCurrentMessage(prev=>(prev+1)%messages.length);

},3000);

return ()=>clearInterval(interval);

},[]);

  const handleExploreClick = () => {
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

return(

<section className="features" id="features">

<div className="features-container">

<div className="features-header">

<h2 className="features-title">Everything you need, beautifully connected.</h2>

<p>

Track nutrition, hydration, progress and wellness
from one beautifully designed experience.

</p>

</div>

<div className="bento-grid">

    <div className="feature-card nutrition">
        <Apple />
        <h3>Nutrition</h3>
        <p>Monitor healthy eating habits with personalized meal guidance.</p>
    </div>

    <div className="feature-card hydration">
        <Droplets />
        <h3>Hydration</h3>
        <p>Track your daily water intake and stay refreshed.</p>
    </div>

    <div className="feature-card hero-card">

        <div className="dashboard-content">

            <span className="dashboard-tag">
                ✨ Personalized Wellness
            </span>

            <h2>
                Your Wellness
                <span> Dashboard</span>
            </h2>

            <p>
                Everything you need to build healthier habits,
                monitor progress and stay consistent.
            </p>

            <button className="dashboard-btn" onClick={handleExploreClick}>
                Explore the App →
            </button>

        </div>

        <div className="dashboard-phone">
            <div className="dashboard-phone-inner">
                <img
                    src={appScreen}
                    alt="Poshana App"
                />
                <div className="floating-score">
                    92%
                </div>
                <div className="floating-water">
                    💧 8/8
                </div>
            </div>
        </div>

    </div>

    <div className="feature-card analytics">
        <ChartColumn />
        <h3>Analytics</h3>
        <p>Visual insights into your wellness journey.</p>
    </div>

    <div className="feature-card profile">
        <User />
        <h3>Profile</h3>
        <p>Your personalized wellness profile.</p>
    </div>

    <div className="feature-card score">

        <h2>92%</h2>

        <span>Today's Wellness Score</span>

    </div>

</div>

</div>

</section>

)

}