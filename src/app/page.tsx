"use client";

import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Header/>
      <div className="flex flex-col space-y-4">
        <div className="w-fit font-semibold text-gray-500 border-b-2 border-solid border-blueMarine-700">
          <h2>Mais Vendidos Na Categoria <span className="text-blueMarine-700">Smarthphones</span></h2>
        </div>
        <div className="w-fit font-semibold text-gray-500 border-b-2 border-solid border-blueMarine-700">
          <h2>Compre Nas <span className="text-blueMarine-700">Principais Categorias</span></h2>
        </div>
        <div className="w-fit font-semibold text-gray-500 border-b-2 border-solid border-blueMarine-700">
          <h2>Top <span className="text-blueMarine-700">Marcas de Eletronicos</span></h2>
        </div>
      </div>
    </main>
  );
}
