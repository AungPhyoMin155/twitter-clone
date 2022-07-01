import React from 'react'

function PostBtn({ Icon , number}) {
  return (
    <div className='flex items-center text-gray-600 space-x-2 cursor-pointer group'>
        <Icon className='scale-150 rounded-full p-1 group-hover:text-[#1c9bf0] group-hover:bg-[#181818]' />
        <p className='group-hover:text-[#1c9bf0] text-[10px] md:text-base'>{number}</p>
    </div>
  )
}

export default PostBtn