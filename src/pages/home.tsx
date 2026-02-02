import HeroImage from '../assets/home/HeroImge.png'
import SobreImage from '../assets/home/SobreImage.jpg'
import HeartIcon from '../assets/home/HeartIcon.png'
import MissaoIcon from '../assets/home/MissaoIcon.png'
import EyeIcon from '../assets/home/EyeIcon.png'
import Servico01 from '../assets/home/Servico-01.jpg'
import Servico02 from '../assets/home/Servico-02.jpg'
import Servico03 from '../assets/home/Servico-03.png'
import Servico04 from '../assets/home/Servico-04.png'
import Servico05 from '../assets/home/Servico-05.jpg'
import Servico06 from '../assets/home/Servico-06.png'
import MapaClientes from '../assets/home/MapaClientes.png'
import LocalIcon from '../assets/home/LocalIcon.png'
import Aspasicon from '../assets/home/AspasIcon.png'
import LocalLogoIcon from '../assets/home/LocalLogoIcon.png'
import EstatBigLogo from '../assets/home/EstatBigLogo.png'
import ArrowIcon from '../assets/home/ArrowIcon.png'

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import Slider from '../components/slider/slider'
import { useState, type Key } from 'react'
import { SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()

  const [slideAtivo, setSlideAtivo] = useState(1);
  const [swiper, setSwiper] = useState<any | null>(null);

  const settings = {
    centeredSlides: true,
    loop: true,
    spaceBetween: 15, // Base spaceBetween
    onSwiper: (s: any) => setSwiper(s),
    onSlideChange: (swiper: any) => setSlideAtivo(swiper.realIndex),

    slidesPerView: 1.2, // Padrão para telas pequenas

    breakpoints: {
      // A partir de 640px (sm)
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // A partir de 768px (md)
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      // A partir de 1024px (lg)
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1224: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };


  function HeroCard(info: string, label: string) {
    return (
      <div className='w-[25%]'>
        <h2 className='text-[#329BD5] font-bold lg:text-5xl md:text-4xl text-2xl'>{info}</h2>
        <h2 className='text-[#939598] font-medium lg:text-lg sm:text-lg mt-2 text-sm'>{label}</h2>
      </div>
    )
  }


  function SobreCard(imageSrc: string, title: string, label: string) {
    return (
      <div className='lg:p-4 p-4 bg-white w-83 lg:w-83 lg:h-83 h-83 pt-16 text-center not-lg:ml-auto not-lg:mr-auto not-lg:mt-10'>
        <img className='w-[60px] ml-auto mr-auto' src={imageSrc}></img>
        <h1 className='text-[#329BD5] font-bold text-4xl mb-4 mt-1'>{title}</h1>
        <h2 className='text-[#676A6F] font-medium'>{label}</h2>
      </div>
    )
  }

  function ServicosCard(imageSrc: string, title: string, label: string, linkUrl: string) {
    return (
      <div className='not-md:bg-[#329BD5] bg-[#1A485B] shadow-gray-800 shadow-lg flex flex-col h-full w-full'>
        <img className='w-full h-35 object-cover ml-auto mr-auto' src={imageSrc}></img>
        <div className=' pl-8 pr-8 pt-4'>
          <h1 className='text-white font-medium sm:text-3xl text-lg mb-4 whitespace-normal'>{title}</h1>
          <h2 className='text-white font-medium text-[17px] whitespace-normal'>{label}</h2>
        </div>
        <div className='text-right p-4 mt-auto align-bottom  w-full'>
          <button className='bg-white p-1 cursor-pointer' onClick={() => navigate(linkUrl)}>Saiba Mais</button>
        </div>
      </div>
    )
  }

  function EstadoText(estado: string) {
    return (
      <div className='flex mt-6 h-8'>
        <img src={LocalIcon} className='h-7 mt-auto mb-auto'></img>
        <h2 className='text-[#939598] xl:text-2xl lg:text-lg font-medium ml-4 sm:text-lg'>{estado}</h2>
      </div>
    )
  }

  function FeedbacksCard(text: string, autor: string) {
    return (
      <div className='text-left shadow-md lg:w-[500px] md:w-[400px] p-4 flex flex-col'>
        <img className='h-6 w-8' src={Aspasicon}></img>
        <h2 className='ml-4 mt-3 font-medium text-xl not-sm:text-[16px] text-[#939598]'>{text}</h2>
        <h2 className='pt-8 ml-4 font-medium text-xl not-sm:text-md text-[#939598] mt-auto'>- {autor}</h2>
      </div>
    )
  }


  const slides: any = [
    ServicosCard(Servico01, "Planejamento de Experimento", "Desenhamos a estrutura estatística do seu estudo para validar hipóteses com precisão, do cálculo amostral à definição de variáveis e formulários otimizados.", "servicos/planejamento-estrategico"),
    ServicosCard(Servico02, "Análise de Dados", "Tratamos, organizamos e interpretamos seus dados para revelar padrões e gerar insights claros, com dashboards e visualizações intuitivas.", "/servicos/analise-de-dados"),
    ServicosCard(Servico03, "Validação Estatística", "Aplicamos testes estatísticos para comprovar se os resultados são reais ou fruto do acaso, garantindo decisões seguras e publicações confiáveis.", "servicos/validacao-estatistica"),
    ServicosCard(Servico04, "Business Intelligence (BI)", "Construímos dashboards interativos que reúnem suas métricas em um só lugar, revelando oportunidades, tendências e caminhos de crescimento.", "/servicos/business-intelligence"),
    ServicosCard(Servico05, "Consultoria Estatística", "Acompanhamos todo o ciclo analítico, do planejamento à entrega de insights, para transformar informações em resultados concretos e confiáveis.", "servicos/consultoria-estatistica"),
    ServicosCard(Servico06, "Modelagem Estatística (Machine Learning)", "Criamos modelos e algoritmos que explicam e antecipam tendências, otimizam processos e aumentam a precisão das suas estratégias", "/servicos/machine-learning"),
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <div className="w-full xl:w-300 xl:ml-auto xl:mr-auto">
        <div className='lg:flex justify-between lg:pt-24 lg:pr-24 lg:pl-24 md:pt-20 md:pr-20 md:pl-20 p-4 xl:pr-0 xl:pl-0'>
          <div className="lg:w-[60%]">
            <h1 className="text-[#235f77] font-extrabold lg:text-6xl md:text-4xl text-3xl">TRANSFORMANDO DADOS<br className='not-lg:hidden' /> EM <span className="text-[#329bd5]">DECISÕES INTELIGENTES</span></h1>
            <h3 className="lg:text-[23px] text-[16px] mt-4 text-[#2789A7] font-medium">NÓS DA ESTAT JÚNIOR, CONECTAMOS INOVAÇÃO, CIÊNCIA E IMPACTO PARA TRANSFORMAR DESAFIOS EM OPORTUNIDADES.</h3>
          </div>
          <img className='lg:w-[40%] mt-4 object-contain rounded-2xl' src={HeroImage}></img>
        </div>
        <div className='w-full text-center'>
          <h1 className='mt-12 text-[#235F77] lg:text-lg sm:text-xl font-medium sm:mb-12 mb-4 not-sm:pl-8 not-sm:pr-8'>Na Estat Júnior o foco é encontrar a melhor solução para você!</h1>
          <div className='flex justify-between lg:pl-12 lg:pr-12 pl-4 pr-4 pb-10'>
            {HeroCard("+30", "Anos de Mercado")}
            {HeroCard("+130", "Projetos")}
            {HeroCard("9.25", "satifação de Projetos")}
            {HeroCard("100%", "Qualidade da Unicamp")}
          </div>
        </div>
      </div>

      {/* SOBRE NÓS */}
      <div className='bg-[#1A485B] w-full pt-12 pb-12'>
        <div className='xl:w-300 xl:ml-auto xl:mr-auto'>
          <div className='flex justify-between md:pl-24 md:pr-24 pl-4 pr-4 xl:pr-0 xl:pl-0'>
            <div className='w-full lg:w-[60%]'>
              <div className='w-full text-center'>
                <h1 className='text-white font-extrabold sm:text-4xl text-4xl'>SOBRE NÓS</h1>
              </div>
              <h2 className='text-white sm:text-[22px] text-[18px] mt-10 font-medium'>A Estat Júnior é uma empresa formada por graduandos em Estatística da Unicamp, dedicada a transformar dados em soluções inteligentes. Há mais de 30 anos, unimos conhecimento técnico e inovação para apoiar empresas e pesquisadores em suas decisões e impulsionar o desenvolvimento do Brasil.</h2>
            </div>
            <img src={SobreImage} className='w-0 lg:w-[35%] hidden lg:block object-contain ml-8'></img>
          </div>
          <img className='not-lg:block hidden ml-auto mr-auto mt-4 md:pl-24 md:pr-24 pl-8 pr-8' src={EstatBigLogo}></img>
          <div className='lg:flex justify-between w-full mt-20  md:pl-6 md:pr-6'>
            {SobreCard(MissaoIcon, "Missão", "Impactar nossos membros e a sociedade por meio de serviços estatísticos de qualidade e vivência empresarial a fim de uma mesma causa")}
            {SobreCard(EyeIcon, "Visão", "Ser uma empresa Alto Impacto, referência em Estatística e reconhecida pela união e propósito da equipe")}
            {SobreCard(HeartIcon, "Valores", "Ideais e atitudes que estão presentes no comportamento da empresa")}
          </div>
        </div>
      </div>

      {/* SERVIÇOS */}
      <div className='md:p-24 not-md:p-4 xl:w-300 xl:ml-auto xl:mr-auto xl:pr-0 xl:pl-0 not-sm:mt-12'>
        <div className='text-center'>
          <h1 className='text-[#329BD5] font-bold lg:text-4xl sm:text-4xl text-3xl'>Transforme dados em decisões estratégicas com a Estat Júnior</h1>
        </div>
        <div className='mt-12 h-full items-stretch *:h-full cursor-grab'>
          <div className='flex'>
            <button className='w-30 not-md:hidden pr-8' onClick={() => swiper?.slidePrev()}><img className='scale-x-[-1]' src={ArrowIcon}></img></button>
            <Slider settings={settings}>
              {slides.map((slide: any, index: Key | null | undefined) => (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    if (swiper) {
                      swiper.slideTo(index);
                    }
                  }}
                  className="h-auto! flex items-stretch"
                >
                  {slide}
                </SwiperSlide>
              ))}
            </Slider>
            <button className='not-md:hidden w-30 pl-8' onClick={() => swiper?.slideNext()}><img className='' src={ArrowIcon}></img></button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_: any, originalIndex: number) => {
              return (
                <div
                  key={originalIndex}
                  className={"h-3 rounded-full transition-all duration-300 " + (originalIndex === slideAtivo ? "w-6 bg-[#329BD5]" : "w-3 bg-[#329BD5]/50")}
                ></div>
              );
            })}
          </div>
        </div>
        <div className='text-center mt-12 w-full'>
          <h2 className='text-[#676A6F] md:text-4xl not-md:text-xl font-medium lg:w-220 ml-auto mr-auto'>Fale com nossos especialistas e descubra como a Estat Júnior pode impulsionar o seu projeto.</h2>
          <button onClick={() => navigate("/contatos")} className='cursor-pointer mt-4 p-3 border-[#329BD5] border-2 shadow-sm text-[#329BD5] font-medium'>Agende uma Reunião</button>
        </div>
      </div>

      {/* CLIENTES */}
      <div className='xl:w-300 xl:ml-auto xl:mr-auto w-full sm:pl-12 sm:pr-12 pr-4 pl-4 not-md:mt-12 xl:pr-0 xl:pl-0'>
        <div className='text-center'>
          <h1 className='text-[#329BD5] md:text-4xl text-4xl font-bold'>Nossos clientes</h1>
          <h2 className='text-[#939598] md:text-3xl text-lg font-medium mt-4'>Atendemos mais de 40 cidades em todo o Brasil!</h2>
        </div>
        <div className='md:flex w-full justify-between'>
          <div className='xl:w-[44%] md:w-[44%] w-full flex'>
            <img src={MapaClientes} className='w-full mt-auto mb-auto'></img>
          </div>
          <div className='md:w-[66%] flex justify-between w-full'>
            <div className='md:ml-4 mt-auto mb-auto not-sm:grid not-sm:grid-cols-2 not-sm:gap-5 ml-auto mr-auto'>
              {EstadoText("São Paulo (SP)")}
              {EstadoText("Minas Gerais (MG)")}
              {EstadoText("Santa Catarina (SC)")}
              {EstadoText("Paraná (PR)")}
              {EstadoText("Distrito Federal (DF)")}
              {EstadoText("Mato Grosso (MT)")}
              {EstadoText("Rondônia (RO)")}
              {EstadoText("Amazonas (AM)")}
              {EstadoText("Pará (PA)")}
            </div>
            <div className='xl:w-70 md:w-60'>
              <h1 className='text-[#329BD5] text-[10px] ml-4 border-3 p-8 not-sm:hidden'>Amparo,<p></p> Araçatuba,<p></p> Araraquara,<p></p> Botucatu,<p></p> Bragança Paulista,<p></p> Caiçara,<p></p> Campinas,<p></p> Capivari,<p></p> Indaiatuba,<p></p> Itapira,<p></p> Jaguariúna,<p></p> Jundiaí,<p></p> Limeira,<p></p> Louveira,<p></p> Monte Mor,<p></p> Morungaba,<p></p> Nova Odessa,<p></p> Orlândia,<p></p> Paulínia,<p></p> Pedreira,<p></p> Pindamonhangaba,<p></p> Piracicaba,<p></p> Praia Grande,<p></p> Ribeirão Claro,<p></p> Salto,<p></p> Santo Antônio de Posse,<p></p> São Bernardo do Campo,<p></p> São Ferraz de Vasconcelos,<p></p> São José do Rio Pardo,<p></p> São Paulo,<p></p> Sorocaba,<p></p> Sumaré,<p></p> Tapiratiba,<p></p> Valinhos,<p></p> Várzea Paulista,<p></p> Vinhedo.</h1>
            </div>
          </div>
        </div>
        <div className='w-full text-center mt-16'>
          <h1 className='text-[#2F83AC] text-4xl font-medium'>O que nossos clientes dizem</h1>
          <div className='md:flex lg:w-[88%] ml-auto mr-auto justify-between mt-8'>
            {FeedbacksCard("“Gostaria de agradecer à equipe da Estat Júnior por ter aceitado realizar a análise dos meus dados, em um tempo recorde, com presteza e qualidade. O trabalho apresentado foi surpreendente.”", "Vívian Cristina Ribeiro Barbosa")}
            {FeedbacksCard("“A equipe é muito técnica, apresentou os resultados de forma clara e precisa. No pós relatório, a equipe ainda estava disponível para sanar minhas dúvidas.”", "Maíra de Souza Regis")}
          </div>
        </div>
      </div>

      {/* LOCAL */}
      <div className='bg-[#1A485B] w-full mt-32'>
        <div className='xl:w-300 xl:ml-auto xl:mr-auto'>
          <img src={LocalLogoIcon} className='relative left-1/2 -translate-x-1/2 -top-10'></img>
          <div className='md:flex justify-between lg:pl-12 lg:pr-12 pl-4 pr-4 pb-24 xl:pr-0 xl:pl-0'>
            <div className='xl:w-[55%] lg:w-[50%] md:w-[40%] w-full'>
              <iframe className='rounded-xl lg:w-full h-80 xl:w-full md:w-full md:h-100 not-md:w-[95%] not-md:ml-auto not-md:mr-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.641375216198!2d-47.0702733245281!3d-22.815748734623998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c152a497a99d%3A0xa63c230a8e3ed2d5!2sEstat%20J%C3%BAnior%20-%20An%C3%A1lise%20Estat%C3%ADstica!5e0!3m2!1spt-BR!2sbr!4v1765309937994!5m2!1spt-BR!2sbr" width="600" height="450" style={{ marginRight: 'em' }} loading="lazy"></iframe>
            </div>
            <div className='xl:w-[40%] lg:w-[45%] md:w-[55%] w-full not-md:mt-12'>
              <h1 className='text-4xl text-white font-medium'>Onde estamos?</h1>
              <h2 className='text-white font-medium md:mt-12 mt-6 text-lg not-md:text-lg'>Universidade Estadual de Campinas<p></p>Rua Sérgio Buarque de Holanda, 561<p></p>Cidade Universitária<p></p>Campinas - SP
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* CONTATO - Peguei diretamente da página de contato */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 md:p-12 mb-10 gap-10 mt-10 relative z-10">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-[#235F77] font-bold text-4xl md:text-5xl mb-2">Contato</h2>
          <p className="font-medium text-lg text-[#676A6F] leading-snug">
            Fale com a gente e descubra como podemos<br />impulsionar o seu negócio!
          </p>
          <p className="font-medium text-sm text-[#676A6F] mt-2 max-w-sm">
            No formulário, mencione seu modelo de<br />negócios para podermos te auxiliar melhor.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <FaWhatsapp className="text-[#235F77] text-xl" />
            <a href="https://wa.me/551935216073" className="text-[#235F77] font-medium underline" target="_blank" rel="noreferrer">
              +55 (19) 35216073
            </a>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-[#235F77] text-xl" />
            <a href="mailto:Comercial@estatjr.com.br" className="text-[#235F77] font-medium">
              Comercial@estatjr.com.br
            </a>
          </div>

          {/* redes sociais – só DESKTOP */}
          <div className="mt-4 hidden md:flex items-center gap-3">
            <a href="https://www.instagram.com/estatjunior/" className="w-9 h-9 rounded-md bg-[#235F77] flex items-center justify-center">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="https://www.linkedin.com/company/estat-junior/" className="w-9 h-9 rounded-md bg-[#235F77] flex items-center justify-center">
              <FaLinkedinIn className="text-white text-lg" />
            </a>
            <a href="https://www.facebook.com/estatjunior" className="w-9 h-9 rounded-md bg-[#235F77] flex items-center justify-center">
              <FaFacebookF className="text-white text-lg" />
            </a>
          </div>

          <div className='w-full text-center'>
            <button onClick={() => navigate("/contatos")} className="cursor-pointer mt-5 w-fit inline-block md:bg-[#1A485B] bg-[#329BD5] text-white font-medium text-sm px-5 py-3 hover:opacity-90 transition">
              Agende uma Reunião
            </button>
          </div>
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
              className="mt-4 px-8 py-2 font-medium bg-[#235F77] text-white hover:opacity-90 transition self-center"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home