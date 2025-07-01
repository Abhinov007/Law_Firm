import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactUs from './ContactUs';

const YoutubeApi = () => {
  const [videos, setVideos] = useState([]);

  const VITE_YOUTUBE_API = import.meta.env.VITE_YOUTUBE_API;
  const VITE_CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: VITE_CHANNEL_ID,
              maxResults: 6,
              key: VITE_YOUTUBE_API,
            },
          }
        );
        console.log('Full JSON Response:', response.data);
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="flex flex-col h-auto mb-5 justify-center mt-9 px-4 md:px-12" id="blog">
      <h1 className="text-2xl font-bold mb-6 text-center">My YouTube Videos</h1>
      
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="rounded overflow-hidden shadow-lg w-full"
          >
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-4 py-3">
              <div className="font-semibold text-lg">{video.snippet.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mx-auto mt-10">
        <ContactUs />
      </div>
    </div>
  );
};

export default YoutubeApi;
