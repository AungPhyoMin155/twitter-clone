import React from 'react'
import { Twitter } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className='flex-[0.2] flex flex-col lg:flex-[0.25] min-h-screen items-center justify-between p-2'>
        <div>

            <SidebarOption Icon={Twitter} />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={TagIcon} title="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} title="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} title="Messages" />
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} title="Bookmarks" />
            <SidebarOption Icon={StickyNote2OutlinedIcon} title="Lists" />
            <SidebarOption Icon={PersonOutlineOutlinedIcon} title="Profile" />
            <SidebarOption Icon={MoreHorizOutlinedIcon} title="More" />
            <button className='w-full bg-[#1c9bf0] hover:bg-[#1A8CD8] hidden md:inline-block rounded-full py-2 text-white font-bold text-lg transition-all duration-150 ease-out mt-2'>Tweet</button>
            <button className='w-8 h-8 font-bold text-white rounded-full ml-2 bg-[#1c9bf0] hover:bg-[#1A8CD8] mt-2 md:hidden'>+</button>
    
        </div>

        <Avatar />
    </div>
  )
}

export default Sidebar