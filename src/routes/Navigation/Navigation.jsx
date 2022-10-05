import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <div className='nav-title'>
                    <h1>Júpiter App</h1>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                    <Link className='nav-link' to='/add'>
                        Add
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navigation;