import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import Bj from "./../../assets/Logo BJ.png";
import Fejesp from "./../../assets/logo Fejesp.png";
import NUCA from "./../../assets/NUCLEO-CAMPINAS.png";
import Unicamp from "./../../assets/logo unicamp.png";
import Logo from "./../../assets/logo.png";
import Logo_alterna from "./../../assets/logo altenativa footer.png";

function Footer() {
  return (
    <footer className="mt-10">
      <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-40 bg-[#ccd9df] px-4 py-4">
        <img
          src={Bj}
          className="h-8 sm:h-10 md:h-12 object-contain"
          alt="Brasil Júnior"
        />
        <img
          src={Fejesp}
          className="h-8 sm:h-10 md:h-12 object-contain"
          alt="FEJESP"
        />
        <img
          src={NUCA}
          className="h-8 sm:h-10 md:h-12 object-contain"
          alt="Núcleo Campinas"
        />
        <img
          src={Unicamp}
          className="h-8 sm:h-10 md:h-12 object-contain"
          alt="Unicamp"
        />
        <img
          src={Logo}
          className="h-8 sm:h-10 md:h-12 object-contain"
          alt="Atria Jr"
        />
      </div>

      <div className="bg-[#235F77] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex justify-start md:mr-8">
            <img
              src={Logo_alterna}
              className="bg-white h-32 md:h-48 lg:h-60 object-contain"
              alt="Logo Atria Jr"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2 flex-1 text-sm">
            <div>
              <h2 className="font-semibold text-lg mb-2">Sobre Nós</h2>
              <ul className="space-y-1">
                <li>Blog</li>
                <li>Contato</li>
                <li>Quem Somos</li>
                <li>
                  CNPJ: <span className="font-medium">67.157.651/0001-60</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Contato</h2>
              <ul className="space-y-1">
                <li>
                  <a href="tel:+551935216073" className="hover:underline">+55 (19) 3521-6073</a>
                </li>
                <li>
                  <a href="mailto:comercial@estatjr.com.br" className="hover:underline">comercial@estatjr.com.br</a>
                </li>
                <li>Formulário de Contato</li>
              </ul>
            </div>

            <div className="md:row-span-2">
              <h2 className="font-semibold text-lg mb-2">Serviços</h2>
              <ul className="space-y-1">
                <li>Análise de Dados</li>
                <li>Validação Estatística</li>
                <li>Business Intelligence</li>
                <li>Consultoria Estatística</li>
                <li>Modelagem Estatística</li>
                <li>Planejamento de Experimento</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Redes Sociais</h2>
              <div className="flex items-center gap-4 mt-2 text-lg">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:text-[#ccd9df] hover:border-[#ccd9df] transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:text-[#ccd9df] hover:border-[#ccd9df] transition-colors"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:text-[#ccd9df] hover:border-[#ccd9df] transition-colors"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Endereço</h2>
              <p className="text-sm leading-relaxed">
                Rua Sérgio Buarque de Holanda, 561 – Cidade Universitária,
                Campinas – SP
                <br />
                CEP: 13.083-859
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <p className="text-[11px] text-center text-white/80 py-3 px-2">
            © {new Date().getFullYear()}. Todos os direitos reservados.
            Desenvolvido por Atria Júnior e Beets Júnior.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
