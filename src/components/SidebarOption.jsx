import React from 'react'

function SidebarOption({ Icon, title}) {
  return (
    <div className='flex items-center cursor-pointer p-3 rounded-full hover:bg-[#181818] max-w-fit text-white transition-all duration-200 ease-out'>
        {Icon && <Icon /> }
        {title && <h3 className='font-bold px-2 hidden md:inline-block'>{title}</h3>}
    </div>
  )
}

export default SidebarOption