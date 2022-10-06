import './Home.css';
import WeatherList from '../../components/WeatherList';

const Home = () => {
    return (
        <>
            <div className='main-container'>
                <WeatherList />
            </div>
        </>
    );
}

export default Home;