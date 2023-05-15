import React from "react";
import muñeco from "../img/muñeco.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Result({ value }) {
  const verifyWord = () => {
    const capitalizedWord = /[A-Z]/.test(value);
	const accentedWord = /[áéíóúÁÉÍÓÚ]/.test(value);

	if(capitalizedWord || accentedWord) {
		return true
	} else {
		return false
	}
  };

  const showToastMessage = () => {
    toast.success("Texto Copiado 😎", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value);
    showToastMessage();
  };

  return (
    <div className="w-[100%] lg:h-[100%] flex justify-center items-center mt-10 pb-10">
      <ToastContainer />
      <div className="w-[90%] lg:h-[100%] flex flex-col justify-center items-center gap-4 text-center bg-white p-10 rounded-2xl">
        {value !== "" ? (
          <div className="w-[100%] h-[100%] flex flex-col items-center justify-between gap-7">
            <p className="text-[#495057] text-[24px]">{value}</p>
            <button
              onClick={handleCopyClick}
              className="border-[1px] border-[#0A3871] text-[#0A3871] w-[100%] py-4 rounded-2xl "
            >
              Copiar
            </button>
          </div>
        ) : (
          <div>
            <div className="hidden lg:flex">
              <img src={muñeco} alt="muñeco" />
            </div>
            <h2 className="text-[24px] font-[700]">
              Ningún mensaje fue encontrado
            </h2>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
          </div>
        )}
      </div>
    </div>
  );
}
