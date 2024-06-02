import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       const accepted = e.target.terms.checked;
       console.log(email, password, accepted);
  
       if(password.length <6){
        setRegisterError('password should be at least 6 characterr or longer');
        return;
       }
       else if(!/[A-Z]/.test(password)){
        setRegisterError('your password should have at least one upper case character.')
        return;
       }
       else if(!accepted){
        setRegisterError('please accept our terms and conditions')
        return;
       }

    //    reset error 
    setRegisterError('');
    setSuccess('');
    //   create user
    

      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
      .then(result =>{
        console.log(result.user);
        setSuccess('user created successfully')
    })
    .catch(error =>{
        console.log(error);
        setRegisterError(error.message);
    });

    }

   

    return (
        <div className='mx-auto border w-2/4'>
            <h2 className="text-3xl text-center mt-5">please register</h2>
            <form onSubmit={handleRegister} className='text-center'>
                <input className='mb-4 mt-2 w-2/4' type="email" placeholder='type your email' name='email' id='' />
                <br />

               <div className='mb-4 relative '>
               <input
                 className='w-2/4' 
                 type={ showPassword ? "text" : "password" }
                 placeholder='type your password' 
                 name='password' 
                 id='' />
               </div>
                <span className='absolute top1/2 mt-[-34px] ml-28' onClick={ ()=> setShowPassword(!showPassword)}>

                    {
                        showPassword ?  <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>
                    }
                

                </span>
                <br />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept <a href="#">our terms and conditions</a></label> <br />

                <input className='btn btn-secondary w-2/4 mt-4 mb-4 ' type="submit" value="Register" />
            </form>
            {
                registerError && <p>{registerError}</p>
            }
            {
                success && <p className='text-green-600'>{success}</p>
            }
        </div>
    );
};

export default Register