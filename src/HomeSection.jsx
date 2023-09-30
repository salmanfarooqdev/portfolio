import { useState, useEffect } from "react";
import VantaBackground from "./VantaBackground";


export default function HomeSection()
{
    const [nameMargin, setNameMargin] = useState('100%');
    const [titleMargin, setTitleMargin] = useState('3%');
  
    useEffect(() => {
      // Simulate the animation by changing the margins after a delay sdsdg 
      setTimeout(() => {
        setNameMargin('10%');
        setTitleMargin('10%');
      }, 200); // Adjust the delay as needed
    }, []);

    return (
        
        <div className="home-section" id="home-section">
           <VantaBackground />

            <div className="name" style={{ marginLeft: nameMargin }}>
                  <div className="home-first-name">Salman Farooq</div>
            </div>
            
            <div className="title" style={{ marginLeft: titleMargin }}>
                <div className="home-title">Fullstack Web </div>
                <div className="home-title-2"> Developer</div>
            </div>
           


        </div>
    )
}