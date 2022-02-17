import { Link } from 'react-router-dom';
import './header.css';

const Header = ({sair}) => {
    return (
        <div className="head d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3">
            <div className="container">
                <p className="text-white">DASH <span>SYSTEM</span></p>
            </div>

            {
                sair && <Link to="/"><button type="button" className="btn-sair btn btn-danger"> SAIR </button></Link>
            }
        </div>
    );
}

export default Header;