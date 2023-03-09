import React, { useState } from 'react'
import { Form, FormGroup, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import {auth} from '../../firebase.config';
import { storage } from '../../firebase.config';
import { db } from '../../firebase.config';

import { toast } from 'react-toastify';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    const signup = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                toast.error(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

                        // update user profile
                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadURL,
                        });

                        // store user data in firestore database
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL,
                        });

                    });
                }
            )

            setLoading(false);
            toast.success('Account Created');
            navigate('/login');

        } catch(error) {
            setLoading(false);
            toast.error('Something Went Wrong');
        }
    }


    return (
        <div>
            {
                loading ? <Spinner animation="grow" variant="primary" /> :
                <div className='login_section'>                
                    <h3>Signup</h3>
                    <Form onSubmit={signup}>
                        <FormGroup className='form_group'>
                            <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            />
                        </FormGroup>
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
                        <FormGroup className='form_group form_img'>
                            <input
                            type='file'
                            onChange={e => setFile(e.target.files[0])}
                            />
                        </FormGroup>
        
                        <button type='submit' className='buy_btn auth_btn'>create an account</button>
        
                        <p>
                            <span>Already have an account? </span>
                            <Link to='/login'>Login</Link>
                        </p>
                    </Form>
                </div>
            }
        </div>
    )
}

export default SignUp