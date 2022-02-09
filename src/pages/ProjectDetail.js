import { useParams } from "react-router-dom";
import '../assets/Projects.css'
import Ostello from "./Ostello";
import ReBooks from "./Rebooks";
import RestrOrder from "./RestrOrder";
import CrossWord from "./Crossword";
import ReeFood from "./ReeFood";
import TravelPro from "./TravelPro";

const ProjectDetail = () => {
    
    const params = useParams();
    const {projectName} = params;
    let content = [];

    if(projectName === 'ostello'){
        content = <Ostello/>
    }

    else if(projectName === 'travelpro'){
        content = <TravelPro/>
    }

    else if(projectName === 'studentwiki'){
        content = '';
    }

    else if(projectName === 'crossword'){
        content = <CrossWord/>
    }

    else if(projectName === 'reefood'){
        content = <ReeFood/>
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