import React, { useState } from 'react';
import { useRouter } from 'next/router';

 const Login: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    
    const handleLogin = e => {
        e.preventDefault();
        router.push('/');
    }

    return (
        <div>
            <h1>Bem-vindo</h1>
            <h3>Faça login com seu usuário github para começar</h3>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <input type="text" name="user" id="user" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Entrar"/>
                </div>
            </form>
        </div>
    );
}

export default Login;
