"use client";

import Link from "next/link";
import { PropsWithChildren, useState } from "react";

export default function Sidebar({ children }: PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 border-r border-gray-300 border-solid transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col md:w-64`}
      >
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Alma</h2>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/leads"
              className="hover:bg-gray-200 px-3 py-2 rounded-md transition"
            >
              Leads
            </Link>
            <Link
              href="/register"
              className="hover:bg-gray-200 px-3 py-2 rounded-md transition"
            >
              New Lead
            </Link>
          </nav>
        </div>
      </aside>

      {isOpen && (
        <button
          className="fixed inset-0 bg-white bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            =
          </button>
          <h1 className="text-lg font-semibold">Alma</h1>
        </header>

        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
