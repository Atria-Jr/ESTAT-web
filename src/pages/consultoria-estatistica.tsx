import HeroImage from "./../assets/consultoria-Estatistica/Hero-Image.jpg"
import OQueEImage from "./../assets/consultoria-Estatistica/O-Que-E-Image.jpg"
import OQueEMobile from "./../assets/consultoria-Estatistica/O-Que-E-Mobile.png"
import HeroMobile from "./../assets/consultoria-Estatistica/Hero-Mobile.png"
import BeneficiosImage from "./../assets/consultoria-Estatistica/Beneficios-Image.jpg"
import BeneficiosMobile from "./../assets/consultoria-Estatistica/Beneficios-Mobile.png"
import ContatoMobile01 from "./../assets/validacao-estatistica/Contato-Mobile-01.png"
import ContatoMobile02 from "./../assets/validacao-estatistica/Contato-Mobile-02.png"
import ContatoMobile03 from "./../assets/validacao-estatistica/Contato-Mobile-03.png"
import ContatoMobile04 from "./../assets/validacao-estatistica/Contato-Mobile-04.png"
import ContatoMobile05 from "./../assets/validacao-estatistica/Contato-Mobile-05.png"
import seta from '../assets/servicos/seta.svg';

function ConsultoriaEstatistica() {
    return (
        <div className="w-full">
            {/*  Hero  */}
            <div className="text-center not-lg:pl-8 not-lg:pr-8 lg:bg-linear-to-r lg:from-[#3197d1] lg:to-[#214e66] not-lg:mb-12">
                <div className="flex lg:w-full mr-auto ml-auto">
                    <div className="lg:w-[50%] lg:py-24 lg:px-[5%]">
                        <h1 className="lg:text-white text-[#2789A7] not-lg:mt-12 text-3xl font-bold mb-12">Consultoria Estatística</h1>
                        <p className="text-[20px] lg:text-white font-medium text-left">Ter dados é o primeiro passo. Transformá-los em resultados concretos exige um parceiro especializado.</p>
                        <img src={HeroMobile} className="lg:w-[500px] w-[80%] lg:ml-12 not-lg:ml-auto not-lg:mr-auto lg:hidden"></img>
                        <p className="text-[20px] lg:text-white font-medium text-left mt-4">Nossa Consultoria Analítica acompanha seu negócio <span className="lg:text-[#A3F1F7] text-[#235F77]">em toda a jornada dos dados, garantindo que cada etapa, da coleta inicial à análise final, seja executada com máxima eficiência.</span><br></br> Nós cuidamos da complexidade técnica para que você possa focar no seu objetivo: tomar decisões seguras.</p>
                    </div>
                    <img src={HeroImage} className="lg:w-[50%] object-cover not-lg:hidden rounded-tl-[48px] rounded-bl-[48px] opacity-60"></img>
                </div>
            </div>

            {/*O que é validação estatística */}
            <div className="flex w-full not-lg:bg-[#2F83AC]">
                <img className="w-[35%] h-[440px] not-lg:hidden object-cover" src={OQueEImage}></img>
                <div className="lg:w-[65%] w-[90%] py-20 ml-auto mr-auto">
                    <div className="lg:w-[700px] w-full ml-auto mr-auto not-lg:text-center">
                        <h1 className="mb-12 lg:px-[5%] text-2xl font-bold lg:text-[#266C8B] text-white">O QUE É CONSULTORIA ESTATÍSTICA?</h1>
                        <img src={OQueEMobile} className="lg:hidden w-[90%] max-w-[300px] ml-auto mr-auto"></img>
                        <p className="text-justify lg:px-[5%] text-xl font-medium lg:w-[700px]  ml-auto mr-auto not-lg:text-white">A consultoria estatística é um serviço especializado que ajuda empresas, pesquisadores e estudantes a <span className="lg:text-[#2F83AC] text-[#A3F1F7]">usar a análise de dados para tomar decisões mais inteligentes e embasadas.</span> Um estatístico profissional trabalha para transformar dados brutos em informações úteis, seguindo metodologias científicas para coletar, organizar, analisar e interpretar os dados.</p>
                    </div>
                </div>
            </div>

            {/* Nossos Métodos */}
            <div className="w-full py-12 lg:py-20 bg-white lg:bg-[#1A485B] px-4">
                <h2 className="text-[#0071CE] lg:text-white text-center text-2xl lg:text-3xl font-bold mb-16 lg:mb-20 uppercase tracking-tight max-w-xs mx-auto lg:max-w-none">
                    Nossa Atuação de Ponta a Ponta
                </h2>

                <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-16 lg:gap-12 max-w-[1100px] mx-auto">

                    <div className="relative w-full max-w-[320px] h-[300px] border border-gray-300 shadow-2xl p-8 flex flex-col justify-center bg-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2D708E] text-white font-bold text-center py-3 px-4 w-[90%] text-lg">
                            Planejamento e Coleta de Dados
                        </div>
                        <p className="text-[#555] text-center font-bold text-md leading-relaxed mt-4">
                            Auxiliamos na definição da melhor estratégia e nas ferramentas para coletar os dados necessários para seu projeto, seja através de pesquisas, extração de sistemas ou outras fontes.
                        </p>
                    </div>

                    <div className="relative w-full max-w-[320px] h-[300px] border border-gray-300 shadow-2xl p-8 flex flex-col justify-center bg-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2D708E] text-white font-bold text-center py-3 px-4 w-[90%] text-lg">
                            Estruturação e Criação de Banco de Dados
                        </div>
                        <p className="text-[#555] text-center font-bold text-md leading-relaxed mt-4">
                            Desenhamos e implementamos a base de dados ideal, garantindo que suas informações sejam armazenadas de forma segura, organizada e pronta para análise.
                        </p>
                    </div>

                    <div className="relative w-full max-w-[320px] h-[300px] border border-gray-300 shadow-2xl p-8 flex flex-col justify-center bg-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2D708E] text-white font-bold text-center py-3 px-4 w-[90%] text-lg">
                            Tratamento e Preparação dos Dados
                        </div>
                        <p className="text-[#555] text-center font-bold text-md leading-relaxed mt-4">
                            Realizamos a limpeza, a validação e a organização dos seus dados brutos, transformando-os em um ativo confiável e de alta qualidade.
                        </p>
                    </div>

                    <div className="relative w-full max-w-[320px] h-[300px] border border-gray-300 shadow-2xl p-8 flex flex-col justify-center bg-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2D708E] text-white font-bold text-center py-3 px-4 w-[90%] text-lg">
                            Análise Personalizada e Geração de Insights
                        </div>
                        <p className="text-[#555] text-center font-bold text-md leading-relaxed mt-4">
                            Aplicamos as técnicas adequadas aos seus desafios para extrair as respostas que realmente apoiam suas metas estratégicas.
                        </p>
                    </div>

                    <div className="relative w-full max-w-[320px] h-[300px] border border-gray-300 shadow-2xl p-8 flex flex-col justify-center bg-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2D708E] text-white font-bold text-center py-3 px-4 w-[90%] text-lg">
                            Entrega de Resultados Acionáveis
                        </div>
                        <p className="text-[#555] text-center font-bold text-md leading-relaxed mt-4">
                            Apresentamos os resultados de forma clara e visual, com relatórios e dashboards que servem como uma base sólida para suas decisões mais importantes.
                        </p>
                    </div>

                </div>
            </div>

            {/* Benefício */}
            <div className="pt-24 pb-24 text-center bg-[#000000] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(7,27,37,0.8), rgba(7,27,37,0.8)),url(${BeneficiosImage})` }}>
                <h1 className="font-bold lg:text-4xl not-lg:text-3xl text-white bg-[url()]">O BENEFÍCIO DIRETO PARA O SEU PROJETO</h1>
                <img src={BeneficiosMobile} className="w-[75%] max-w-[500px] lg:hidden ml-auto mr-auto"></img>
                <p className="ml-auto mr-auto mt-12 text-justify lg:w-[900px] font-semibold lg:text-2xl text-lg pl-8 pr-8 text-white">
                    Com nossa consultoria, você ganha um <span className="text-[#91C9ED]">departamento de dados sob demanda, totalmente focado em seus objetivos.</span> O resultado é a tranquilidade de saber que suas decisões são suportadas por análises robustas, permitindo que você se concentre no crescimento e na gestão do seu negócio.
                </p>
            </div>

            {/* Contate-nos */}
            <section className='py-14'>
                <div className='max-w-5xl mx-auto px-4'>
                    <h3 className='text-center text-xl lg:text-2xl font-semibold text-[#235F77] mb-10'>Nossos Diferenciais</h3>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto'>
                        <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
                            <img src={ContatoMobile01} className='w-28 mb-5' alt='Atendimento' />
                            <div>
                                <h4 className='font-semibold text-[#235F77] text-base mb-2'>Recebe um atendimento humano e personalizado no canal de comunicação que preferir;</h4>
                            </div>
                        </article>

                        <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
                            <img src={ContatoMobile02} className='w-28 mb-5' alt='Padrões' />
                            <div>
                                <h4 className='font-semibold text-[#235F77] text-base mb-2'>Ganha a capacidade de identificar padrões, comparar resultados e detectar anomalias;</h4>
                            </div>
                        </article>

                        <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
                            <img src={ContatoMobile03} className='w-28 mb-5' alt='Processo' />
                            <div>
                                <h4 className='font-semibold text-[#235F77] text-base mb-2'>
                                    Realiza esse processo de forma rápida, fundamentando suas provisões, conclusões e estratégias em evidências sólidas, mesmo sem
                                    conhecimento técnico avançado.
                                </h4>
                            </div>
                        </article>

                        <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
                            <div className='flex items-center gap-3 mb-5'>
                                <img src={ContatoMobile04} className='w-20' alt='Preço' />
                                <img src={ContatoMobile05} className='w-20' alt='Unicamp' />
                            </div>
                            <div>
                                <h4 className='font-semibold text-[#235F77] text-base mb-2'>Tudo isso com o padrão de qualidade Unicamp e com preços abaixo do mercado!</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Contate nos */}
            <section className="bg-[#2F83AC] text-center py-4 px-8 m-0 md:hidden block">
                <h1 className="font-medium text-white">Não baseie suas decisões no acaso. Fale com nossos especialistas e valide seus resultados com rigor científico.</h1>
            </section>

            <section className='my-15 flex justify-center items-end gap-5 md:hidden block'>
                <img src={seta} alt="seta" className='lg:hidden w-[40px] sm:w-[80px] mb-5' />
                <a href="https://wa.me/551935216073" target='_blank' className='w-[300px] h-[68px] bg-[#1A485B] text-center text-white font-semibold text-lg px-2 md:px-15 py-5'>CONTATE-NOS</a>
                <img src={seta} alt="seta" className='lg:hidden transform scale-x-[-1] w-[40px] sm:w-[80px] mb-5' />
            </section>
        </div>
    )
}

export default ConsultoriaEstatistica
