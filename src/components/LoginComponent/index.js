import './logincomp.css';

const LoginComponent = () => {
    return (
        <div className='fundo'>
            <div className='bg container d-flex flex-column align-items-center p-4'>
                <h2 className='text-white text-center'>DASH<br /> <span>SYSTEM</span></h2>

                <div className='form-container'>
                    <label className='text-white'>Digite o usuário:</label>
                    <input type="text"></input>

                    <label className='text-white'>Digite a senha:</label>
                    <input type="password"></input>
                </div>

                <button type='button' className='mybtn btn'>ENTRAR</button>
            </div>
        </div>
    );
}

export default LoginComponent;