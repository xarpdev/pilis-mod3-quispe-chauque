import './Navigation.css';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/add'>
                        Add
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;