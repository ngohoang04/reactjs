import videoHomePage from '../../assets/video-homepage.mp4';
const HomePage = () => {
    return (
        <div>

            <video autoPlay loop muted >
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div claassName="homepage-content">
                <h1 claassName="title-1">Welcome to Our Website</h1>
                <p claassName="title-2">Your one-stop solution for all your needs.</p>
                <button claassName="title-3">get started</button>
            </div>
        </div>
    );
}

export default HomePage;