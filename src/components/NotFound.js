
import NotFoundPic from "../assets/notFound.svg"

const NotFound = () => {
    return(
        <>
            <div className="text-center mt-5">
                <img src={NotFoundPic} style={{height: '300px'}} alt='Not-Found-Pic'/>
                <p className="mt-4">&lt; This page doesn't exist &gt;</p>
            </div>
        </>
    );
};

export default NotFound;