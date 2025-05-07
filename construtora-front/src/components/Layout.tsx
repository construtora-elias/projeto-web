import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";




type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Construtora Elias" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
  <div>

    {/* HEADER FIXO INCLUINDO TOPBAR + MENU */}
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
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

      {/* MENU PRINCIPAL */}
      <nav className="flex flex-wrap justify-center gap-4">
        <Link href="/">Home</Link> | <Link href="/">Empreendimentos</Link> |{" "}
        <Link href="/institucional">Encontre Seu Empreendimento</Link> |{" "}
        <Link href="/">Lançamentos</Link> | <Link href="/">Já é Cliente?</Link> |{" "}
        <Link href="/portfolio">Entre em Contato</Link> | <Link href="/">Quem somos</Link>
      </nav>
    </header>

    {/* ATENÇÃO: padding-top ajustado para somar topbar + menu */}
    <main className="pt-32">
      {children}
    </main>

    <footer className="flex flex-row items-center justify-center fixed bottom-0 left-0 right-0">
      <span>Footer</span>
    </footer>
  </div>
  </div>
);

export default Layout;
