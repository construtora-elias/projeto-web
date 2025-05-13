import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Construtora Elias" }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // Detecta se veio com hash e faz scroll depois que a página carrega
  useEffect(() => {
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        {/* MENU PRINCIPAL */}
        <nav className="relative flex justify-center items-center px-6 py-4 mt-2">
          <div className="flex flex-wrap gap-4">
            <Link href="/">Home</Link>
            <Link href="/#empreendimentos">Empreendimentos</Link>
            <Link href="/#lancamentos">Lançamentos</Link>
            <Link href="/#quemsomos">Quem somos</Link>
          </div>
        </nav>
      </header>

      <main className="pt-32">
        {children}
      </main>

      {/* Sidebar e outras partes… */}
    </div>
  );
};

export default Layout;
