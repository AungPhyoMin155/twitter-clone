import { Autorenew, Close, FavoriteBorder, FavoriteBorderOutlined, Fullscreen, IosShareOutlined, ModeCommentOutlined, More, MoreHorizOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import PostBtn from './PostBtn'

function Post({name,description,photoUrl,timestamp,groupName}) {
  return (
    <div className='border pb-2'>
        {/* Post Header */}
        <div className='p-2'>
            <div className='text-white flex items-center pl-4'>
                <Fullscreen className='cursor-pointer mr-2' />
                <p className='flex-1'><span className='text-gray-500 cursor-pointer hover:underline'>{groupName}</span> <span className='text-gray-500'>.</span> <span className='text-[#1c9bf0] cursor-pointer hover:underline'>See more</span></p>
                <Close className='cursor-pointer' />
            </div>
            <div className='text-white flex items-center'>
                <Avatar className='cursor-pointer mr-2' />
                <div className='flex-1 cursor-pointer'>
                    <p><span className='font-bold cursor-pointer hover:underline'>{name}</span> <span className='text-gray-500'>@{name} .</span> <span className='text-gray-500 hover:underline cursor-pointer'>Date</span></p>
                    <p>{description}</p>
                </div>
                <MoreHorizOutlined className='cursor-pointer' />
            </div>
        </div>

        {/* post body */}
        <div className='flex flex-col w-[60%] mx-auto'>
            {
                photoUrl && <img className='rounded-lg object-contain' src={photoUrl} alt="from twitter" />
            }
            {/* pic link */}
            {
                photoUrl && <p className='text-gray-500 hover:underline my-2 cursor-pointer'>{name} pics</p>
            }
            {/* post btn */}
            <div className='flex items-center justify-between'>
                <PostBtn Icon={ModeCommentOutlined} number='10' />
                <PostBtn Icon={Autorenew} number='1100' />
                <PostBtn Icon={FavoriteBorderOutlined} number='1500' />
                <PostBtn Icon={IosShareOutlined} number='500' />
            </div> 
        </div>
    </div>
  )
}

export default Post


// https://images.unsplash.com/photo-1656466611069-6dbccda3406a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80