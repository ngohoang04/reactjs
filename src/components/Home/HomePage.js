import videoHomePage from '../../assets/video-homepage.mp4';
const HomePage = () => {
    return (
        <div>

            <video autoPlay loop muted >
                <source src={videoHomePage} type="video/mp4" />
            </video>
        </div>
    );
}

export default HomePage;