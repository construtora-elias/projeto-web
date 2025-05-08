import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";




type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Construtora Elias" }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return(
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
  <div>

    {/* HEADER FIXO INCLUINDO TOPBAR + MENU */}
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      {/* TOPBAR */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-full mx-auto flex justify-center items-center px-4 py-2">
          <div className="flex space-x-9">
            <div className="flex items-center space-x-1">
              <span>📍</span>
              <span>Rua dos Perdidos N - #####</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📞</span>
              <span>(219) 555-0114</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>✉️</span>
              <span>email@email.com</span>
          </div>
          <div className="flex items-center space-x-2">
          <img
    src="https://img.icons8.com/?size=100&id=16733&format=png&color=40C057"
    alt="WhatsApp"
    className="w-5 h-5"
  />
            <a
    href="https://wa.me/552195550114"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    WhatsApp
  </a>
          </div>
        </div>
      </div>
    </div>

      {/* MENU PRINCIPAL + BOTÃO LATERAL */}
      <nav className="relative flex justify-center items-center px-6 py-4 mt-2">
            {/* Links principais */}
            <div className="flex flex-wrap gap-4">
              <Link href="/">Home</Link>
              <Link href="/">Empreendimentos</Link>
              <Link href="/">Lançamentos</Link>
              <Link href="/">Quem somos</Link>
            </div>

            {/* Botão abrir painel */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="absolute right-8 text-2xl p-2 focus:outline-none"
              aria-label="Abrir menu lateral"
            >
              ☰
            </button>
          </nav>
        </header>

        {/* ATENÇÃO: padding-top ajustado para somar topbar + menu */}
        <main className="pt-32">
          {children}
        </main>

        <footer className="flex flex-row items-center justify-center fixed bottom-0 left-0 right-0">
          <span>Footer</span>
        </footer>

        {/* Fundo escuro ao abrir sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar lateral direita */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-2xl"
            aria-label="Fechar menu lateral"
          >
            ✕
          </button>

          <nav className="flex flex-col space-y-4 p-6 mt-12">
            <Link href="/extra1">Encontre Seu Empreendimento</Link>
            <Link href="/extra2">Já é Cliente?</Link>
            <Link href="/extra3">Entre em Contato</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Layout;