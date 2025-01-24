import React, { useState, useEffect, useRef } from "react";

const MusicPlayer = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song 1", src: "@/music/Ali.mp3" },
    { id: 2, title: "Song 2", src: "@/music/AliMir.mp3" },
    { id: 3, title: "Song 3", src: "@/music/Alipasha.mp3" },
    { id: 4, title: "Song 4", src: "@/music/Aliy.mp3" },
    { id: 5, title: "Song 5", src: "@/music/Amirabbas.mp3" },
    { id: 6, title: "Song 6", src: "@/music/Saretan.mp3" },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // تعریف اولیه null برای اطمینان از استفاده درست

  // مدیریت تغییر آهنگ و پخش آن
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // متوقف کردن آهنگ قبلی
      audioRef.current.src = songs[currentSongIndex].src;
      audioRef.current.load(); // بارگذاری مجدد فایل صوتی

      if (isPlaying) {
        audioRef.current.play();
      }
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause(); // توقف هنگام تغییر آهنگ
      }
    };
  }, [currentSongIndex, isPlaying]);

  // شروع و توقف پخش آهنگ
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  // جابجایی به آهنگ بعدی
  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); // شروع پخش آهنگ جدید
  };

  // جابجایی به آهنگ قبلی
  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true); // شروع پخش آهنگ جدید
  };

  // وقتی آهنگ تمام شد، آهنگ بعدی را پخش می‌کنیم
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = nextSong;
    }
  }, []);

  return (
    <div className=" p-8 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center animate-fade-in">
        Music Player
      </h2>
      <ul className="space-y-4">
        {songs.map((song, index) => (
          <li key={song.id} className="flex justify-between items-center">
            <span className="text-xl font-bold">{song.title}</span>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400 transition duration-300"
              onClick={() => {
                setCurrentSongIndex(index);
                setIsPlaying(true);
              }}
            >
              Play
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <audio ref={audioRef} controls>
          <source src={songs[currentSongIndex].src} type="audio/mp3" />
          <source
            src={songs[currentSongIndex].src.replace(".mp3", ".ogg")}
            type="audio/ogg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>

      <div className="mt-8 flex justify-center gap-6">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition duration-300"
          onClick={prevSong}
        >
          Prev
        </button>
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-400 transition duration-300 transform hover:scale-105"
          onClick={togglePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition duration-300"
          onClick={nextSong}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
