import { AddLocation, Close, DateRange, EmojiEmotions, Gif, Photo, Poll, Refresh } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import Post from './Post';
import firebase from 'firebase/compat';

function Feed() {
  const feedboxBtn = `text-[#1A8CD8] cursor-pointer rounded-full hover:bg-[#181818] p-[4px] transition-all duration-150 scale-150 ease-out`;
  const [post , setPost] = useState([]);
  const [input , setInput] = useState("");
  const [photoUrl ,setPhotoUrl] = useState("");
  const [modal , setModal] = useState(false);

  const pastePhotoUrl = () => {
    setModal(true);
    
  }

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
      setPost(snapshot.docs.map(doc=>(
        {
          id: doc.id,
          data:doc.data(),
        }
        )
      ))
    })
  },[])
  const sendTweet = (e)=> {
    e.preventDefault();

    db.collection('posts').add({
      name: "Apmin",
      description: input,
      photoUrl,
      groupName: "React Developer",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setModal(false);

    setInput("");
    setPhotoUrl("");
  }

  return (
    <div  className='flex-[0.8] overflow-y-scroll lg:flex-[0.55] min-h-screen'>
      {/* Feed Header */}
      <div className='text-white flex items-center justify-between p-4 border-t border-x'>
        <h1 className='font-bold text-2xl'>Home</h1>
        <Refresh />
      </div>

      {/* Tweet Box */}
      <div className='flex border-b border-x'>
        <Avatar className='ml-2 mt-2' />
        <form className='p-2 mx-2 flex-1 relative'>
          <input value={input} onChange={e=>setInput(e.target.value)} className='p-1 text-lg w-full ml-1 border-b mb-1 outline-none text-gray-400 pb-2 bg-transparent' type="text" placeholder="Whtat's happening?" />
          <div className='flex items-center p-2 justify-between'>
            <div className='flex items-center space-x-4'>
              <Photo onClick={pastePhotoUrl} className={feedboxBtn} />
              {
                modal && <div className='absolute top-[85%] -left-[10%] w-[250px] h-[70px] bg-blue-500 z-50 flex items-end justify-center pb-2'>
                          <input value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} className='w-[98%] mx-2 border-none outline-none truncate' type="text" placeholder='Photo Url' />
                          <Close onClick={()=>setModal(false)} className='absolute top-0 right-0 text-white cursor-pointer hover:text-red-700' />
                        </div>
              }
              <Gif className={feedboxBtn} />
              <Poll className={feedboxBtn} />
              <EmojiEmotions className={feedboxBtn} />
              <DateRange className={feedboxBtn} />
              <AddLocation className='text-[#1A8CD8]' />
            </div>
            <button type='submit' onClick={sendTweet} className='bg-[#1c9bf0] hover:bg-[#1A8CD8] px-4 py-1 rounded-full text-white font-semibold text-lg transition-all duration-150 ease-out'>Tweet</button>
          </div>
        </form>
      </div>

      {/* Posts */}
      {
        post.map(({ id, data: {name,description,photoUrl,timestamp,groupName}})=>(
          <Post 
            key={id}
            name={name}
            description={description}
            photoUrl={photoUrl}
            timestamp={timestamp}
            groupName={groupName}
          />
        ))
      }
      
    </div>
  )
}

export default Feed