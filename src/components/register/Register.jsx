import React from 'react';

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email, password);
    }

    return (
        <div className='mx-auto border w-2/4'>
            <h2 className="text-3xl text-center mt-5">please register</h2>
            <form onSubmit={handleRegister} className='text-center'>
                <input className='mb-4 mt-2 w-2/4' type="email" placeholder='type your email' name='email' id='' />
                <br />
                <input className='w-2/4' type="password" placeholder='type your password' name='password' id='' />
                <br />
                <input className='btn btn-secondary w-2/4 mt-4 mb-4 ' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register