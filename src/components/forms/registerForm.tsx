export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-2">
      <input
        className="h-10 rounded border border-x-gray-300"
        type="text"
        placeholder="Digite seu Email"
      />
      <input
        className="h-10 rounded border border-gray-300"
        type="text"
        placeholder="Digite seu Nome de Usuário"
      />
      <input
        className="h-10 rounded border border-gray-300"
        type="password"
        placeholder="Digite sua Senha"
      />

      <button className="bg-blueMarine-700 rounded-lg">Cadastrar</button>
    </form>
  );
}
