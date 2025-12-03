import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWrench,
  FaMedal,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";

function Contato() {
  return (
    <div>
      <div className="bg-[#1A485B] flex items-center justify-center py-16 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white max-w-3xl">
          Fale Conosco e venha transformar seus desafios em oportunidades!
        </h1>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 md:p-12 mb-10 gap-10 mt-10 relative z-10">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-[#235F77] font-bold text-4xl md:text-5xl mb-2">
            Contato
          </h2>

          <p className="font-medium text-lg text-[#676A6F] leading-snug">
            Fale com a gente e descubra como podemos
            <br />
            impulsionar o seu negócio!
          </p>

          <p className="font-medium text-sm text-[#676A6F] mt-2 max-w-sm">
            No formulário, mencione seu modelo de
            <br />
            negócios para podermos te auxiliar melhor.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <FaWhatsapp className="text-[#235F77] text-xl" />
            <a
              href="https://wa.me/551935216073"
              className="text-[#235F77] font-medium underline"
              target="_blank"
              rel="noreferrer"
            >
              +55 (19) 35216073
            </a>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-[#235F77] text-xl" />
            <a
              href="mailto:Comercial@estatjr.com.br"
              className="text-[#235F77] font-medium"
            >
              Comercial@estatjr.com.br
            </a>
          </div>

          {/* redes sociais – só DESKTOP */}
          <div className="mt-4 hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/estatjunior/"
              className="w-9 h-9 rounded-md bg-[#235F77] flex items-center justify-center"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/estat-junior/"
              className="w-9 h-9 rounded-md bg-[#235F77] flex items-center justify-center"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
            <a
              href="https://www.facebook.com/estatjunior"
              className="w-9 h-9 rounded-md bg-[#235F77] flex items-center justify-center"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
          </div>

          <button className="mt-5 w-fit inline-block bg-[#1A485B] text-white font-semibold text-sm px-5 py-3 hover:opacity-90 transition">
            Agende uma Reunião
          </button>
        </div>

        <div className="md:w-1/2 bg-[#1A485B] p-6 md:p-8">
          <form
            className="flex flex-col gap-6"
            action=""
            method="POST"
          >
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              required
              className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1A485B] bg-white"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1A485B] bg-white"
            />

            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1A485B] bg-white"
            />

            <textarea
              name="mensagem"
              placeholder="Mensagem"
              rows={4}
              className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1A485B] bg-white resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 px-8 py-2 font-semibold bg-[#235F77] text-white hover:opacity-90 transition self-center"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#329BD52B] w-full h-fit p-10 flex items-center justify-center">
        <p className="text-[#5A94FF] md:text-3xl md:max-w-5xl font-bold text-center text-lg max-w-3xl">
          Nós sempre estamos dispostos a te ajudar com o seu problema, garantindo
          uma solução de impacto para você e a sua empresa!
        </p>
      </div>

      <div className="w-full flex justify-center py-10">
        <div className="flex flex-row justify-between gap-3 w-full max-w-md md:max-w-4xl md:gap-8 px-4 md:px-0">
          <div className="flex-1 max-w-[100px] h-24 md:max-w-none md:h-53 bg-white border border-gray-200 shadow-md rounded-sm flex flex-col items-center justify-center">
            <FaWrench className="text-[22px] md:text-[60px] text-[#5A94FF] mb-2" />
            <span className="text-[#5A94FF] font-bold text-[11px] md:text-lg">
              Solução
            </span>
          </div>

          <div className="flex-1 max-w-[100px] h-24 md:max-w-none md:h-53 bg-white border border-gray-200 shadow-md rounded-sm flex flex-col items-center justify-center">
            <BsChatDots className="text-[22px] md:text-[60px] text-[#5A94FF] mb-2" />
            <span className="text-[#5A94FF] font-bold text-[11px] md:text-lg">
              Comunicação
            </span>
          </div>

          <div className="flex-1 max-w-[100px] h-24 md:max-w-none md:h-53 bg-white border border-gray-200 shadow-md rounded-sm flex flex-col items-center justify-center">
            <FaMedal className="text-[22px] md:text-[60px] text-[#5A94FF] mb-2" />
            <span className="text-[#5A94FF] font-bold text-[11px] md:text-lg">
              Experiência
            </span>
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-center gap-4 pb-10">
        <a
          href="https://www.instagram.com/estatjunior/"
          className="w-9 h-9 bg-[#235F77] flex items-center justify-center"
        >
          <FaInstagram className="text-white text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/company/estat-junior/"
          className="w-9 h-9 bg-[#235F77] flex items-center justify-center"
        >
          <FaLinkedinIn className="text-white text-lg" />
        </a>
        <a
          href="https://www.facebook.com/estatjunior"
          className="w-9 h-9 bg-[#235F77] flex items-center justify-center"
        >
          <FaFacebookF className="text-white text-lg" />
        </a>
      </div>
    </div>
  );
}

export default Contato;
