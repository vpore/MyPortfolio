
//import rebooks from '../assets/rebooks.gif'

const ReBooks = () => {
    return(
        <>
            <div>

                <h4 className='text-center mb-5'> </h4>
                <a href='https://www.figma.com/file/JT7sj7XkopeFrjYvnjlODZ/ReBooks?node-id=0%3A1' target='_blank' rel="noreferrer" className="designLink">View Design<i className="fa fa-magic fa-lg ps-1"></i></a>

                {/* <img src={rebooks} className='video ms-5' alt='ReBooks-Video-Demo'/> */}

                <div className='projectDesc mt-5'>
                    <p>The main aim of ReBooks is to reuse textbooks by connecting students - who are willing to sell their old textbooks with<br/>students who are in need of them.</p>
                    <h3>Features</h3>
                    <ul>
                        <li><h5>Dashboard</h5>Here, students can view the list of books which are available for sale.</li>
                        <li><h5>Recent Purchase</h5>Students can have a record of the information of books which they have purchased earlier like, the price,<br/>the author, date of purchase.</li>
                    </ul>
                    <p>ReBooks was designed as a part of our Sem-2 PCE business project.</p>
                </div>

            </div>
        </>
    );
};

export default ReBooks;