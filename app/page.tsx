import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 ">
      <h2 className="text-4xl font-black text-center text-white">Futbol <br /> <span className="text-orange-400">ChampionsTrivia:</span> </h2>
      <Link href="/quiz">
        <button className="text-xl rounded-md py-2 bg-sky-900 p-4 text-slate-50 border  hover:bg-sky-800">Iniciar Preguntas</button>
      </Link>
    </div>
   
  );
}
