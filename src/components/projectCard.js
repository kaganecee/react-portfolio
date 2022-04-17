import {BsArrowBarRight} from "react-icons/bs"

const ProjectCard = (props) => {
    return  (
        <>
        <div style={{paddingBottom:"2rem"}} className="container d-flex flex-column gap-3">
                <div className="row projectCard">
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                        <img width={240}  src={props.image} alt=""></img>
                    </div>
                    <div className="col-md-8 col-sm-12 d-flex flex-column justify-content-center gap-3">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                        <div className="d-flex justify-content-end">
                            <button className="projectButton" ><BsArrowBarRight/></button>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}
export default ProjectCard;