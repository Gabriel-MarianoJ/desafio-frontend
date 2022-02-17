import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LoginComponent from '../../components/LoginComponent';
import './login.css';

const Login = () => {
    
    return(
        <div className='mycon'>
            <Header />

            <LoginComponent />
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </div>
    );
}

export default Login;