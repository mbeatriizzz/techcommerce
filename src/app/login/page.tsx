"use client";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <div className="flex flex-col items-center w-1/2 h-1/2 bg-gray-400 rounded-lg text-black">
          <button>Create account with Google</button>
          <p>or</p>
          <form className="flex flex-col gap-2">
            <input type="text" placeholder="Digite seu Email" />
            <input type="password" placeholder="Digite sua Senha" />
            <button className="bg-blueMarine-700 rounded-lg">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
