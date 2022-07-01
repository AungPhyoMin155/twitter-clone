import { Close, Twitter } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../../firebase'
import { login, selectUser } from '../features/userSlice'

function Login() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signin = () => {
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        }).catch(error=> alert(error));
    }

    
    
  return (
    <div className='flex items-center justify-center relative h-screen bg-gray-800'>
        <form className="flex flex-col absolute top-[20%] p-4 items-center rounded-lg bg-white w-[300px]">
            <IconButton>
                <Twitter className='text-[#1D9BF0] w-full' />
            </IconButton>
            <Close className='absolute left-[8px] cursor-pointer text-gray-700 hover:text-black' />
            
            <h1 className='text-2xl font-bold'>Sign in to Twitter</h1>
            <div onClick={signin} className='flex items-center cursor-pointer justify-center w-full py-2 my-4 border-[2px] rounded-full pr-4 bg-[#F5F5F5]'>
                <img  className='h-[25px] overflow-hidden object-cover bg-transparent' src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="gmail logo" />
                <h1>Continue with Google</h1>
            </div>
            <div className='flex justify-center cursor-pointer w-full items-center py-2 border-[2px] rounded-full px-4 bg-[#F5F5F5]'>
                <img  className='h-[25px] overflow-hidden object-contain bg-transparent' src="https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg" alt="gmail logo" />
                <h1>Continue with Apple</h1>
            </div>
            <div className='flex items-center my-4'>
                <div className='w-[110px] h-[2px] bg-gray-500' />
                <span className='mx-2'>or</span>
                <div className='w-[110px] h-[2px] bg-gray-500' />
            </div>

            <input className='outline-none border rounded-md px-2 py-4 focus-within:border-[#1D9BF0] focus-within:border-[2px]' type="text" placeholder='Phone,email,or username' />

            <button className='w-full py-2 my-4 bg-black hover:bg-gray-800 hover:text-gray-300 text-white rounded-full'>Next</button>
            <button className='w-full py-1 hover:bg-gray-300 border-[2px] rounded-full'>Forgot password?</button>

            <p className='my-4'><span className='text-gray-500'>Don't have an account?</span> <span className='text-blue-600 hover:underline cursor-pointer'>Sign up</span></p>
        </form>
    </div>
  )
}

export default Login