import React, { useState } from 'react'
import { Form, FormGroup, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const logIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log(user);
            setLoading(false);
            toast.success('Successfully Logged in');
            navigate('/checkout');

        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }

    }

    return (
        <div>
            {
                loading ? <Spinner animation="grow" variant="primary" /> : 
                <div className='login_section'>
                    <h3>login</h3>
        
                    <Form onSubmit={logIn}>
                        <FormGroup className='form_group'>
                            <input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className='form_group'>
                            <input
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </FormGroup>
        
                        <button type='submit' className='buy_btn auth_btn'>Login</button>
        
                        <p>
                            <span>Don't have an account? </span>
                            <Link to='/signup'>Create an account</Link>
                        </p>
                    </Form>
                </div>
            }
        </div>
    )
}

export default LogIn