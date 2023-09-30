import data from "./index.json";


export default function ProjectSection()
{
    return(
        <div className="project-section">
            <div className="project-title">Projects</div>
            <div>
                <i className="fa fa-circle"></i>
                <i className="fa fa-circle"></i>
                <i className="fa fa-circle"></i>
            </div>

            <div className="subtitle">These are some of my projects, you can find all of them on my github.</div>

            {
                data?.projects?.map((project, index)=>{
                    return(
                        <div className="project-div" key={index}>
                        <div className="project-image">
                            <img className="projectimg" src={project.src} alt="" />
                        </div>
        
                        <div className="project-info">
                            <div className="project-header">{project.title}</div>
        
                            <div className="project-about">{project.about}
                            </div>
        
                            <div className="project-btns">
                                <button className="project-btn">Visit live</button>
                                <button className="project-btn">View source code</button>
                            </div>
                        </div>
                    </div>

                    )
                })
            }
           


            

           
        </div>
    )
}