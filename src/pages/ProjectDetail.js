
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
    
    const params = useParams();
    const {projectName} = params;

    return(
        <>
            <h1>{projectName}</h1>
        </>
    );
};

export default ProjectDetail;