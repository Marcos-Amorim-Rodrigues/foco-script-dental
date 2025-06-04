
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Section 1 - Left aligned */}
          <div className="text-left">
            <img 
              src="/lovable-uploads/4eaf69a0-3b14-41bc-9166-fbbdb88668f0.png" 
              alt="Foco Marketing" 
              className="h-8 mb-3"
            />
            <p className="text-gray-300 leading-relaxed">
              Especialistas em marketing digital para clínicas odontológicas.
            </p>
          </div>

          {/* Section 2 - Center aligned */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Links importantes</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/politica-privacidade" 
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="/termos-uso" 
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 - Right aligned */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a 
                  href="mailto:contato@agenciafocomkt.com.br"
                  className="hover:text-blue-500 transition-colors"
                >
                  contato@agenciafocomkt.com.br
                </a>
              </p>
              <p className="text-gray-300">
                <a 
                  href="https://wa.me/5538988180075"
                  className="hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (38) 98818-0075
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line - Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400">
            © 2025 Foco Marketing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
