"use client";

import { useState } from "react";
import LoginForm from "@/components/forms/loginForm";
import RegisterForm from "@/components/forms/registerForm";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const notRegisteredClick = () => {
    setIsRegistering(true);
  };

  const registerClick = () => {
    setIsRegistering(false);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen border-2 border-black">
      <div className="bg-gray-100 relative flex w-3/4 h-3/4 p-4 text-black overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-purple-500 transition-transform duration-700 ${
            isRegistering ? "transform translate-x-full" : ""
          }`}
        ></div>

        <div className="flex-1 flex flex-col items-center justify-center bg-blue-300 relative z-10 p-4">
          <h1 className="text-2xl">Login</h1>
          <button>Create account with Google</button>
          <p>or</p>
          <LoginForm />
          <button onClick={notRegisteredClick}>Quero me cadastrar</button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center bg-yellow-300 relative z-10 p-4">
          <h1 className="text-2xl">Cadastrar</h1>
          <RegisterForm />
          <button onClick={registerClick}>Já possuo conta!</button>
        </div>
      </div>
    </div>
  );
}
