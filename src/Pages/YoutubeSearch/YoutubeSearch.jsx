import React, { useState } from "react";
import axios from "axios";

const YouTubeSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyASe3lcavJbGd-yFS9UXJOKjnKrYXRpXLE"; 

  const handleSearch = async () => {
    if (!keyword) return;

    try {
      const searchResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            maxResults: 10,
            q: keyword,
            key: API_KEY,
          },
        }
      );

      const videoIds = searchResponse.data.items
        .map((item) => item.id.videoId)
        .join(",");

      const videoDetailsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            part: "snippet,statistics",
            id: videoIds,
            key: API_KEY,
          },
        }
      );

      setVideos(videoDetailsResponse.data.items);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen text-white p-8">
      <div className="container bg-gradient-to-r from-gray-900 to-cyan-800 mx-auto max-w-5xl rounded-xl bg-opacity-10 shadow-lg backdrop-blur-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in">
          YouTube Video Search
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Enter a keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown} 
            className="border border-gray-300 p-2 rounded-l-lg focus:outline-none focus:ring-1"
          />
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-cyan-950 to-gray-900 text-white px-6 py-2 rounded-r-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg bg-black bg-opacity-50 shadow-xl p-4 transform transition duration-300 hover:scale-105"
            >
              <iframe
                className="w-full h-48 rounded-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.snippet.title}
                allowFullScreen
              ></iframe>
              <h2 className="text-lg font-semibold mt-4">
                {video.snippet.title}
              </h2>
              <p className="text-sm opacity-80">{video.snippet.channelTitle}</p>
              <p className="text-sm opacity-80">
                Views: {video.statistics.viewCount}
              </p>
              <p className="text-sm opacity-80">
                Published:{" "}
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeSearch;
