import { Search } from '@mui/icons-material';
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='flex-[0.3] min-h-screen hidden lg:inline-block py-2 px-[20px]'>
      <div className='flex items-center bg-[#16181C] py-2 px-3 rounded-full mb-4 focus-within:ring-2 focus-within:ring-[#1c9bf0] group'>
        <Search className='text-[#9299a7] mr-[12px] group-focus-within:text-[#1c9bf0]' />
        <input className='flex-grow bg-transparent border-none outline-none text-[#9299a7]' type="text" placeholder='Search Twitter' />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nannmwesan"
        options={{height: 1000}}
      />
    
    </div>
  )
}

export default Widgets