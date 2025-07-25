
import { useState } from "react";
import { scenesData } from "../utils/scenesData.js";
export default function SearchButton({ onSearch })
{
  const [pesquisa, setPesquisa] = useState("");

  const Baguio_pesquisa = () => {
    const pesquisa_geral = pesquisa.trim().toLowerCase();
    // Procurar por chave do dicionario ou imagem que combine com o texto escrito
    const matchedKey = Object.keys(scenesData).find((chave) => {
      return (
        chave.toLowerCase().includes(pesquisa_geral) || scenesData[chave].image.toLowerCase().includes(pesquisa_geral)
      );
    } ) ;

    if (matchedKey) {
      onSearch(matchedKey);  // Troca a imagem
      alert("imagem achada, repito imagem achada")
    } 
    else 
    {
      alert("Cena não encontrada.");
    }
  };
  
  return (
    <div className="bg-white/30 backdrop-blur-sm flex items-center px-4 py-2 rounded-full border border-white/30 max-w-md w-full shadow-xl/40 space-x-3 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192.904 192.904"
        width="24"
        height="20"
        className="fill-gray-600 rotate-90"
      >
        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
      </svg>
      <input
        type="text"
        placeholder="Digite o local desejado..."
        value={pesquisa}
        onChange={ (x) => setPesquisa(x.target.value)}
        className="flex-grow outline-none text-sm"
      />
      <button
        type="button"
        onClick={Baguio_pesquisa} // Chama a função de pesquisa
        className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm font-bold rounded-full px-6 py-2"
      >
        IR
      </button>
    </div>
  );
}
