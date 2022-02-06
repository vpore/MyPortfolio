
import ostello from '../assets/rebooks.gif'

const Ostello = () => {
    return(
        <>
            <div>

                <h4 className="text-center mb-5">Education Marketplace - One stop for all Academic needs</h4>

                <img src={ostello} alt="Ostello-Video-Demo" className="video ms-5"/>

                <div className='projectDesc'>
                    <p className="mt-5">Ostello is designed for an interactive peer-to-peer social community based marketplace which gives educational guidance.<br/></p>
                    <h3>Features of the app</h3>
                    <ul>
                        <li><h5>Dashboard</h5>User will have access to various informative videos, articles, podcasts.</li>
                        <li><h5>Ostello Social</h5>User will get daily updates related to educational guidance(ofc :p) from the instructors which they follow.</li>
                        <li><h5>Ostello Discuss</h5>Various instructors can also conduct live sessions &amp; discuss about relevant topics.</li>
                        <li><h5>Ostello Bot Help</h5>The bot will provide relevant news updates, practice exam papers, can recommend books, courses, video links.</li>
                    </ul> <br/>
                    <p>Ostello was designed as a part of an UI/UX hackathon within 7 hours.</p> <br/>
                    <a href='https://www.figma.com/file/EcFFIzK9y2qWxiCuhWj4S0/Ostello()?node-id=0%3A1' target='_blank' rel="noreferrer">View Design</a>
                </div>

            </div>
        </>
    );
};

export default Ostello;