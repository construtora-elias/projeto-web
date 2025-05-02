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
    <header className="fixed top-0 left-0 right-0">
      <nav className="flex flex-row items-center justify-evenly mt-6 " >
        <Link href="/">Home</Link> | <Link href="/institucional">Institucional</Link> |{" "}
        <Link href="/portfolio">Portfolio</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer className="flex flex-row items-center justify-center fixed bottom-0 left-0 right-0">
      <span>Footer</span>
    </footer>
  </div>
);

export default Layout;
