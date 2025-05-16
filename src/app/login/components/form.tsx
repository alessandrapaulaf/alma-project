"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setError("");

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 401) {
      return setError("Invalid credentials");
    }

    router.push("/leads");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#fefef8] to-[#f1f5f4]">
      <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Login to Alma
        </h1>
        {
          error && (
            <div
              role="alert"
              className="p-4 mb-4 text-sm text-center text-red-800 bg-red-100 rounded-lg"
            >
              <span className="font-medium">{error}</span>
            </div>
          )
        }
        <form className="space-y-4" action={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-500 text-white font-medium py-2 px-4 rounded-xl transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
