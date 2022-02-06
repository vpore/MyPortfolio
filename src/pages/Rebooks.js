
//import rebooks from '../assets/rebooks.gif'

const ReBooks = () => {
    return(
        <>
            <div>

                <h4 className='text-center mb-5'> </h4>

                {/* <img src={rebooks} className='video ms-5' alt='ReBooks-Video-Demo'/> */}

                <div className='projectDesc mt-5'>
                    <p>The main aim of ReBooks is to reuse textbooks by connecting students - who are willing to sell their old textbooks with<br/>students who are in need of them.</p>
                    <h3>Features of the app</h3>
                    <ul>
                        <li><h5>Dashboard</h5>Here, students can view the list of books which are available for sale.</li>
                        <li><h5>Recent Purchase</h5>Students can have a record of the information of books which they have purchased earlier like, the price,<br/>the author, date of purchase.</li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default ReBooks;