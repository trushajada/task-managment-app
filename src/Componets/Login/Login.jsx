import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const user = { email, password };
        localStorage.setItem('user', JSON.stringify(user));
        console.log('User registered:', user)
        setEmail('');
        setPassword('');
        navigate('/task');
    };

    return (
        <div className="container">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={12} lg={12}>
                        <div className="box p-5 rounded shadow-lg">
                            <h2 className='text-center mb-5 h3 text-light'>LOGIN</h2>
                            <form onSubmit={handleRegister}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className='col-12 p-3 mb-4 rounded shadow-md'

                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className='col-12 p-3 mb-4 rounded shadow-md'

                                />
                                <button type="submit" className='p-3 rounded'>Login</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
