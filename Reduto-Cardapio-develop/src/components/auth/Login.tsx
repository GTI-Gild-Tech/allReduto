import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: (username: string, password: string) => Promise<boolean>;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = await onLogin(username, password);

    if (success) {
      navigate("/dashboard-admin/home");
    } else {
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0eee9]">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-[#0f4c50] mb-6 font-[Retrokia]">
          Login Administrativo
        </h2>

        {/* Mensagem de erro */}
        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-sm font-medium text-[#0f4c50] mb-1"
              htmlFor="username"
            >
              Usuário
            </label>
            <input
              id="username"
              type="text"
              placeholder="Digite aqui..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0f4c50] text-gray-700"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-[#0f4c50] mb-1"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="•••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0f4c50] text-gray-700"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#0f4c50] hover:bg-[#0d4247] text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
