import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [restpassword, setRestPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const user = { email, password };
        localStorage.setItem('user', JSON.stringify(user));
        console.log('User registered:', user);
        setName('');
        setEmail('');
        setPassword('');
        setRestPassword('');
        navigate('/Login');
    };

    return (
        <>
            <div className="container">
                <Row className="justify-content-center">

                    <Col xs={12} md={12} lg={12}>
                        <div className="box p-5 rounded shadow-lg">
                            <h2 className='text-center mb-5 h3 text-light'>REGISTRATION</h2>
                            <form onSubmit={handleRegister}>
                                <input
                                    className='col-12 p-3 mb-4 rounded shadow-md'
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
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
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={restpassword}
                                    onChange={(e) => setRestPassword(e.target.value)}
                                    required
                                    className='col-12 p-3 mb-4 rounded shadow-md'

                                />
                                <button type="submit" className='p-3 rounded'>Register</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    );
}

export default Register;
