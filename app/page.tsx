import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-dvh justify-center gap-6 ">
      <h2 className="text-4xl font-black bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-center">Goalfy: <br /><span className="text-[#f6f6f6]"> Tu Juego, <br /> Tu Conocimiento</span> </h2>
      <Link href="/quiz">
        <button className="text-xl rounded-md font-bold py-2 px-2 border border-gray-400 bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-white">Iniciar Preguntas</button>
      </Link>
    </div>
   
  );
}
