import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ContactUs from './ContactUs';




const YoutubeApi = () => {

   


    const [videos,setVideos]=useState([]);

    const VITE_YOUTUBE_API= import.meta.env.VITE_YOUTUBE_API;
    const VITE_CHANNEL_ID= import.meta.env.VITE_CHANNEL_ID;

    useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await axios.get(
              `https://youtube.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    channelId: VITE_CHANNEL_ID,
                    maxResults: 5,
                    key: VITE_YOUTUBE_API
                }
              }
            );
            console.log("Full JSON Response:", response.data);
            setVideos(response.data.items);
          } catch (error) {
            console.error('Error fetching videos:', error);
          }
        };
    
        fetchVideos();
      }, []);
    


  return (
    <div className="flex flex-col justify-center mt-9 shadow-2lg" id="blog">
    <h1 className="text-2xl font-bold mb-4">My YouTube Videos</h1>
    <div className="grid grid-cols-1 mx-30 shadow-2xl p-6  md:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map((video) => (
        <div key={video.id.videoId} className="rounded overflow-hidden shadow-lg">
        <iframe 
        width="360" 
        height="315" 
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; enc9 shadow-2lgrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{video.snippet.title}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto my-2.5">
      <ContactUs />
      </div>
  </div>
);
};


export default YoutubeApi