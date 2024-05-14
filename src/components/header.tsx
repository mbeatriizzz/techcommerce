import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


export default function Header() {
  var handleSubmit;
  var query;

  return (
    <div className="flex items-center justify-between text-gray-500">
        <h1 className="text-blueMarine-700 font-bold">TechCommerce</h1>
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <input
            className="px-4 py-2 bg-slate-100  rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Digite sua busca..."
            value={query}
            onChange={handleSubmit}
          />
        </form>
        <div className="flex items-center gap-2">
          <FaRegUser className="text-blueMarine-700" />
          <p>Registrar-se/Entrar</p>

          <IoCartOutline  className="text-blueMarine-700"/>
          <p>Carrinho</p>
        </div>
    </div>
  );
}