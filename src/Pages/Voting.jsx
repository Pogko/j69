import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import "../index.css";

const Voting = () => {
  const [votes, setVotes] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [isVotingAvailable, setIsVotingAvailable] = useState(false);

  const options = []; // Kosongkan untuk tes "tidak ada voting"

  useEffect(() => {
    const fetchVotes = async () => {
      const votesData = {};
      for (const option of options) {
        const voteRef = doc(db, "votes", option);
        const voteSnap = await getDoc(voteRef);

        if (voteSnap.exists()) {
          votesData[option] = voteSnap.data().count || 0;
        } else {
          votesData[option] = 0;
        }
      }
      setVotes(votesData);
      setIsVotingAvailable(options.length > 0); // Cek apakah ada voting
    };

    fetchVotes();
  }, []);

  const handleVote = async (option) => {
    if (hasVoted) return;
    setHasVoted(true);

    const voteRef = doc(db, "votes", option);
    const voteSnap = await getDoc(voteRef);

    if (voteSnap.exists()) {
      const currentCount = voteSnap.data().count || 0;
      await updateDoc(voteRef, { count: currentCount + 1 });
    } else {
      await setDoc(voteRef, { count: 1 });
    }

    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: (prevVotes[option] || 0) + 1,
    }));
  };

  return (
    <div className="voting-container">
      <h2 className="voting-title">Voting System</h2>
      {isVotingAvailable ? (
        <div className="voting-options">
          {options.map((option) => (
            <div
              key={option}
              className={`vote-option ${hasVoted ? "voted" : ""}`}
              onClick={() => handleVote(option)}
            >
              <div className="vote-text">{option}</div>
              <div className="vote-count">{votes[option] || 0} Votes</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-voting-text">
          Saat ini tidak ada voting yang sedang berlangsung.  
          Nantikan voting berikutnya!  
        </div>
      )}
    </div>
  );
};

export default Voting;