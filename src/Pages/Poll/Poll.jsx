import React, { useState } from 'react';

const Poll = () => {
  const [pollOptions, setPollOptions] = useState([]);
  const [userVoted, setUserVoted] = useState(false);
  const [showPoll, setShowPoll] = useState(false);

  const handleVote = (id) => {
    if (userVoted) return;

    const updatedOptions = pollOptions.map((option) =>
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    );
    setPollOptions(updatedOptions);
    setUserVoted(true);
  };

  const getPercentage = (votes) => {
    const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);
    return totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100);
  };

  const createPoll = () => {
    setPollOptions([
      { id: 1, text: 'گزینه اول', votes: 3 },
      { id: 2, text: 'گزینه دوم', votes: 2 },
      { id: 3, text: 'گزینه سوم', votes: 5 },
      { id: 4, text: 'گزینه چهارم', votes: 1 },
    ]);
    setShowPoll(true);
    setUserVoted(false);
  };

  const deletePoll = () => {
    setPollOptions([]);
    setShowPoll(false);
    setUserVoted(false);
  };

  return (
    <div className="max-w-lg font-extrabold mx-auto bg-gradient-to-br from-gray-200 via-[#2b2b2b]to-blue-100 p-6 rounded-3xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6 animate-fadeIn">
        نظرسنجی
      </h1>

      <div className="flex justify-center text-[#4f4949] gap-4 mb-6">
        <button
          onClick={createPoll}
          className="glass-button"
        >
          ایجاد نظرسنجی
        </button>
        <button
          onClick={deletePoll}
          className="glass-button"
        >
          حذف نظرسنجی
        </button>
      </div>

      {showPoll && (
        <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-200">
          {pollOptions.map((option) => (
            <div key={option.id} className="mb-4">
              <button
                onClick={() => handleVote(option.id)}
                disabled={userVoted}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  userVoted
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'glass-button'
                }`}
              >
                {option.text}
                <span>{getPercentage(option.votes)}%</span>
              </button>
              <div className="mt-2 w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-gary-400 to-blue-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${getPercentage(option.votes)}%` }}
                ></div>
              </div>
            </div>
          ))}
          {userVoted && (
            <p className="text-center text-green-600 font-semibold mt-4 animate-bounce">
              از شرکت در نظرسنجی متشکریم!
            </p>
          )}
        </div>
      )}

      {!showPoll && (
        <p className="text-center font-extrabold text-3xl text-green-600 mt-4 animate-fadeIn">
          هیچ نظرسنجی فعالی وجود ندارد.
        </p>
      )}
    </div>
  );
};

export default Poll;
