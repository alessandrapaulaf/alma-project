"use client";

import Link from "next/link";
import { PropsWithChildren, useState } from "react";

export default function Sidebar({ children }: PropsWithChildren<object>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-[#fefef8]">
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col md:w-64`}
      >
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-lime-600">Alma</h2>
          <nav className="flex flex-col space-y-3">
            <Link
              href="/leads"
              className="text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-lime-100 hover:text-lime-700 transition"
            >
              Leads
            </Link>
            <Link
              href="/register"
              className="text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-lime-100 hover:text-lime-700 transition"
            >
              New Lead
            </Link>
          </nav>
        </div>
      </aside>

      {isOpen && (
        <button
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 text-2xl font-bold"
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          <h1 className="text-lg font-semibold text-lime-600">Alma</h1>
        </header>

        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
