import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8 px-4">
          {/* Logo + Endereço */}
          <div>
            <img src="/images/logo-saga.png" alt="Logo Saga" className="h-12 mb-4" />
            <p className="text-sm">RUA HONÓRIO PAIVA, 1135 - PIÇARRA – TERESINA – PI</p>
            <p className="text-sm">CNPJ: 18.882.626/0001-34</p>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-semibold mb-2">INSTITUCIONAL</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Obras</a></li>
              <li><a href="#" className="hover:underline">Incorporações</a></li>
              <li><a href="#" className="hover:underline">Sobre Nós</a></li>
              <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-semibold mb-2">ATENDIMENTO</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 text-green-500" />
                <a href="https://wa.me/558632233123" className="hover:underline">Whatsapp</a>
              </li>
              <li className="flex items-center">
                📞 (86) 3223-3123
              </li>
            </ul>
          </div>

          {/* Mídias Sociais */}
          <div>
            <h4 className="font-semibold mb-2">MÍDIAS SOCIAIS</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos reservados */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
          TODOS OS DIREITOS RESERVADOS © 2025
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/558632233123"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}

