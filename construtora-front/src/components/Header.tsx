import Link from "next/link";

export default function Header() {
    return (
      <header>
        
        {/* Topbar */}

        <div className="bg-gray-900 text-gray-300 text-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 px-4 py-2">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Rua dos Perdidos N - #####</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>(219) 555-0114</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>email@email.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>🟢</span> {/* WhatsApp ícone */}
            </div>
          </div>
        </div>
  
        {/* Logo + Menu → você monta aqui depois */}

        <nav className="bg-white shadow">
          <div className="flex justify-center items-center px-6 py-4">
            <div className="flex flex-wrap gap-4">
              <Link href="/">Home</Link>
              <a href="#empreendimentos">Empreendimentos</a>
              <Link href="/lancamentos">Lançamentos</Link>
              <Link href="/quemsomos">Quem somos</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  