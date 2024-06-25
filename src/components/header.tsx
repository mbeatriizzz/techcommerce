import { useState } from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import Search from "./search";

export default function Header() {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header className="flex justify-between items-center text-gray-500">
      <h1 className="text-blueMarine-700 font-bold">TechCommerce</h1>
      <Search query={query} onChange={handleChange} onSubmit={handleSubmit} />

      <div className="flex items-center gap-2">
        <Link href="/login" className="flex items-center gap-1">
          <FaRegUser className="text-blueMarine-700" />
          <p>Entrar/Registrar</p>
        </Link>

        <Link href="/carrinho" className="flex items-center gap-1">
          <IoCartOutline className="text-blueMarine-700" />
          <p>Carrinho</p>
        </Link>

        <Link href="/carrinho" className="flex items-center gap-1">
          <FaHeart className="text-blueMarine-700" />
          <p>Lista de Desejos</p>
        </Link>
      </div>
    </header>
  );
}
