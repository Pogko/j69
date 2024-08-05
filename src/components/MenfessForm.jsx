import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from 'emailjs-com';

const MenfessForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Tambahkan state untuk pesan kesalahan

  const sendMessage = () => {
    if (from.trim() === "" || to.trim() === "" || message.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Tolong isi semua field.",
        customClass: {
          container: "sweet-alert-container",
        },
      });
      return;
    }

    const templateParams = {
      from_name: from,
      to_name: to,
      message: message,
    };

    emailjs.send('service_w4u717q', 'template_3kqxajv', templateParams, '30uyQKyScLQSGpkLp')
      .then((response) => {
        setFrom("");
        setTo("");
        setMessage("");
        setErrorMessage(""); // Reset pesan kesalahan

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Menfess Anda telah dikirim!",
          customClass: {
            container: "sweet-alert-container",
          },
        });
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        setErrorMessage(`Error: ${error.text}`); // Set pesan kesalahan
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Terjadi kesalahan saat mengirim Menfess Anda. Silakan coba lagi.",
          customClass: {
            container: "sweet-alert-container",
          },
        });
      });
  };

  return (
    <div>
      <div className="text-center text-2xl font-semibold mb-2 text-white" id="Glow">
        Formulir Menfess
      </div>
      <div id="FormMenfess" className="flex flex-col mt-5">
        <form>
          <div className="flex items-center mb-4">
            <label htmlFor="from" className="text-white w-20 mb-2">Dari :</label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
            />
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="to" className="text-white w-20 mb-2">Kepada :</label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
            />
          </div>

          <div className="flex items-center mb-4">
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
          Kirim
        </button>
        {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>} {/* Tampilkan pesan kesalahan */}
      </div>
    </div>
  );
};

export default MenfessForm;