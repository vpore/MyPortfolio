import { useParams } from "react-router-dom";
import '../assets/Projects.css'
import Ostello from "./Ostello";
import ReBooks from "./Rebooks";
import NotFound from "../components/NotFound";
import RestrOrder from "./RestrOrder";
import CrossWord from "./Crossword";

const ProjectDetail = () => {
    
    const params = useParams();
    const {projectName} = params;
    let content = [];

    if(projectName === 'ostello'){
        content = <Ostello/>
    }

    else if(projectName === 'travelpro' || projectName === 'studentwiki' || projectName === 'reefood'){
        content = <NotFound/>
    }

    else if(projectName === 'crossword'){
        content = <CrossWord/>
    }

    else if(projectName === 'rebooks'){
        content = <ReBooks/>
    }

    else if(projectName === 'restrorder'){
        content = <RestrOrder/>
    }

    return(
        <>
            <h1 className="fw-bolder text-center mt-4">{projectName.toUpperCase()}</h1>
            <div>
                {content}
            </div>
        </>
    );
};

export default ProjectDetail;