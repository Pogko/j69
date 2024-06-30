import React, { useState } from "react";
import Swal from "sweetalert2";

const MenfessForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (from.trim() === "" || to.trim() === "" || message.trim() === "") {
      // Menampilkan pesan kesalahan jika salah satu field kosong
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all fields.",
        customClass: {
          container: "sweet-alert-container",
        },
      });
      return;
    }

    try {
      // Reset field formulir setelah pengiriman
      setFrom("");
      setTo("");
      setMessage("");
      setTimeout(() => {
        setShouldScrollToBottom(true);
      }, 100);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your Menfess has been submitted!",
        customClass: {
          container: "sweet-alert-container",
        },
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <div className="text-center text-2xl font-semibold mb-2 text-white" id="Glow">
        Menfess Form
      </div>
      <div id="FormMenfess" className="flex flex-col mt-5">
 <form>
  <div className="flex items-center mb-4">
    <img src="/user-solid.svg" alt="From Image" className="h-6 w-6 mr-2" />
    <label htmlFor="from" className="text-white w-20 mb-2">From :</label>
    <input
      type="text"
      id="from"
      value={from}
      onChange={(e) => setFrom(e.target.value)}
      className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
    />
  </div>

  <div className="flex items-center mb-4">
    <img src="/paper-plane.png" alt="To Image" className="h-6 w-6 mr-2" />
    <label htmlFor="to" className="text-white w-20 mb-2">To :</label>
    <input
      type="text"
      id="to"
      value={to}
      onChange={(e) => setTo(e.target.value)}
      className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
    />
  </div>

  <div className="flex items-center mb-4">
    <img src="/Menfess.svg" alt="Message Image" className="h-6 w-6 mr-2" />
    <label htmlFor="message" className="text-white w-20 mb-2">Pesan :</label>
    <textarea
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
    />
  </div>
  </form>
  <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
    Submit
  </button>
     </div>
    </div>
  );
};

export default MenfessForm;