import React, { useState } from "react";
import { AiOutlineInfo } from "react-icons/ai";
import Result from "./Result";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
  const [text, setText] = useState("");
  const [textReady, setTextReady] = useState("");

  const showToastMessage = () => {
    toast.error("Hay un error en la palabra 😒", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  function handleChange(event) {
    setText(event.target.value);
  }

  const verifyWord = () => {
    const capitalizedWord = /[A-Z]/.test(text);
    const accentedWord = /[áéíóúÁÉÍÓÚ]/.test(text);

    if (capitalizedWord || accentedWord) {
      return true;
    } else {
      return false;
    }
  };

  const handleEncryptClick = () => {
    if (verifyWord() == false) {
      const encryptedValue = text
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
      setTextReady(encryptedValue);
    } else {
      showToastMessage()
    }
  };

  const handleDesencryptClick = () => {
    const desencryptedValue = text
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    setTextReady(desencryptedValue);
  };

  return (
    <div className="w-[100%] lg:h-[90%] flex flex-col lg:flex-row justify-center items-center lg:pt-10">
      <ToastContainer />
      <div className="w-[100%] lg:w-[75%] h-[100%] flex flex-col justify-center items-center">
        <Header />
        <div className="w-[90%] lg:w-[80%] lg:h-[100%] lg:flex lg:flex-col lg:justify-between">
          <textarea
            className="w-[100%] bg-transparent font-normal text-[32px] text-[#0A3871] outline-none placeholder:text-[#0A3871]"
            rows={8}
            value={text}
            onChange={handleChange}
            placeholder="Ingrese el texto aqui"
          />
          <div className="flex items-center gap-3">
            <AiOutlineInfo
              className="bg-[#67808E] p-1 rounded-full rotate-180"
              size={25}
              color="white"
            />
            <p>Solo letras minúsculas y sin acentos</p>
          </div>
        </div>
        <div className="w-[90%] lg:w-[80%] flex flex-col md:flex-row gap-6 mt-5">
          <button
            onClick={() => handleEncryptClick()}
            className="bg-[#0A3871] text-white w-[100%] py-5 rounded-2xl"
          >
            Encriptar
          </button>
          <button
            onClick={() => handleDesencryptClick()}
            className="border-[1px] border-[#0A3871] text-[#0A3871] w-[100%] py-5 rounded-2xl"
          >
            Desencriptar
          </button>
        </div>
      </div>
      <div className="w-[100%] lg:w-[25%] lg:h-[100%]">
        <Result value={textReady} />
      </div>
    </div>
  );
}
