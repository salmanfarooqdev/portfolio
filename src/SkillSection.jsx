import data from "./index.json";


export default function SkillSection()
{
    return(
        <div className="skill-section">
            
            <div className="skill-section-div">
            <div className="skill-title">Skills</div>
                <div className="frontend-skills">Front-end</div>
                <div className="frontend">

                    {   
                        data?.fskills?.map((item, index)=>{
                            return(
                                <div className="skill-div" key={index}>
                                <div class="image-container">
                                <img className="skillimg" alt="svgImg" src={item.src}/>
                                <div class="image-text">{item.text}</div>
                                </div>
                                </div>
                            )
                           

                        })
                    }
                </div>
                <div className="backend-skills">Back-end</div>
                <div className="backend">

                            {   
                                data?.bskills?.map((item, index)=>{
                                    return(
                                        <div className="skill-div" key={index}>
                                        <div class="image-container">
                                        <img className="skillimg" alt="svgImg" src={item.src}/>
                                        <div class="image-text">{item.text}</div>
                                        </div>
                                        </div>
                                    )
                                

                                })
                            }
                 </div>
                <div className="miscellaneous">Miscellaneous</div>
                <div className="miscellaneous-inner">

                                {   
                                    data?.mskills?.map((item, index)=>{
                                        return(
                                            <div className="skill-div" key={index}>
                                            <div class="image-container">
                                            <img className="skillimg" alt="svgImg" src={item.src}/>
                                            <div class="image-text">{item.text}</div>
                                            </div>
                                            </div>
                                        )
                                    

                                    })
                                }
                </div>
            </div>
           
        </div>
    )
}