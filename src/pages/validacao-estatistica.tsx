import HeroImage from "./../assets/validacao-Estatistica/Hero-Image.jpg"
import OQueEImage from "./../assets/validacao-Estatistica/O-Que-E-Image.jpg"
import BeneficiosImage from "./../assets/validacao-Estatistica/Beneficios-Image.jpg"
import OQueEMobile from "./../assets/validacao-Estatistica/O-Que-E-Mobile.png"
import BeneficiosMobile from "./../assets/validacao-Estatistica/Beneficios-Mobile.png"
import ContatoMobile01 from "./../assets/validacao-Estatistica/Contato-Mobile-01.png"
import ContatoMobile02 from "./../assets/validacao-Estatistica/Contato-Mobile-02.png"
import ContatoMobile03 from "./../assets/validacao-Estatistica/Contato-Mobile-03.png"
import ContatoMobile04 from "./../assets/validacao-Estatistica/Contato-Mobile-04.png"
import ContatoMobile05 from "./../assets/validacao-Estatistica/Contato-Mobile-05.png"
import seta from '../assets/servicos/seta.svg';

function ValidacaoEstatistica() {
    return (
        <div className="w-full">
            {/*  Hero  */}
            <div className="text-center mr-auto ml-auto mt-24 mb-30 not-lg:pl-8 not-lg:pr-8">
                <h1 className="text-[#2789A7] text-3xl font-bold">Validação Estatística</h1>
                <div className="flex mt-16 lg:w-[1000px] mr-auto ml-auto">
                    <div className="w-lg:[500px]">
                        <p className="text-[20px] font-medium text-left">Você observou um resultado, mas como saber se ele é estatisticamente real ou apenas fruto do acaso? </p>
                        <img src={HeroImage} className="lg:w-[500px] w-[80%] lg:ml-12 not-lg:ml-auto not-lg:mr-auto lg:hidden"></img>
                        <p className="text-[20px] font-medium text-left mt-4">Nosso serviço de Validação Estatística aplica rigorosos testes matemáticos para confirmar suas hipóteses, oferecendo a segurança de que seus achados são confiáveis.
                            Nós separamos a coincidência da evidência, para que suas conclusões sejam indiscutíveis.</p>
                    </div>
                    <img src={HeroImage} className="lg:w-[500px] ml-12 not-lg:hidden"></img>
                </div>
            </div>

            {/*O que é validação estatística */}
            <div className="flex bg-linear-to-r from-[#329BD5] to-[#1A516F] w-full">
                <div className="lg:w-[65%] w-[90%] text-center pt-24 pb-24 ml-auto mr-auto">
                    <div className="lg:w-[700px] w-full ml-auto mr-auto">
                        <img src={OQueEMobile} className="lg:hidden w-[90%] max-w-[300px] ml-auto mr-auto"></img>
                        <h1 className="text-white mb-4 text-2xl font-bold w-[700px] not-lg:hidden  ml-auto mr-auto">O QUE É VALIDAÇÃO ESTATÍSTICA</h1>
                        <p className="text-white text-justify text-xl font-medium lg:w-[700px]  ml-auto mr-auto">A validação estatística é um processo de qualidade com a função de <span className="text-[#A3F2F7]">garantir que dados que não são totalmente verificados possam atender com a segurança</span> de não possuírem viés ou erros inclusos, permitindo assim uma análise concisa que não comprometa a conclusão final do estudo.</p>
                    </div>
                </div>
                <img className="w-[35%] not-lg:hidden" src={OQueEImage}></img>
            </div>

            {/* Nossos Métodos */}
            <div className="w-full py-12 lg:py-20 bg-white px-4">
                <h2 className="text-[#0071CE] lg:text-[#1A516F] text-center text-2xl lg:text-3xl font-bold mb-16 lg:mb-20 uppercase tracking-tight max-w-xs mx-auto lg:max-w-none">
                    Nossos Métodos para Atestar Seus Resultados
                </h2>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-12 max-w-[1100px] mx-auto">

                    <div className="relative w-full max-w-[320px] h-[300px] border border-gray-300 shadow-2xl p-8 flex flex-col justify-center bg-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2D708E] text-white font-bold text-center py-3 px-4 w-[90%] text-lg h-20">
                            Testes de Comparação de Grupos
                        </div>
                        <p className="text-[#555] text-center font-bold text-md leading-relaxed mt-4">
                            Verificamos se as diferenças observadas entre dois ou mais grupos são significativas o suficiente para serem consideradas reais e não aleatórias.
                        </p>
                    </div>

                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-10">
                        <div className="border-2 border-[#1A516F] rounded-full px-3 py-1 text-[#0071CE] font-bold text-center text-sm lg:text-lg whitespace-nowrap">
                            +Segurança
                        </div>
                        <div className="border-2 border-[#1A516F] rounded-full px-3 py-1 text-[#0071CE] font-bold text-center text-sm lg:text-lg whitespace-nowrap">
                            +Confiança
                        </div>
                        <div className="border-2 border-[#1A516F] rounded-full px-3 py-1 text-[#0071CE] font-bold text-center text-sm lg:text-lg whitespace-nowrap">
                            +Certeza
                        </div>
                    </div>

                    <div className="relative w-full max-w-[320px] h-[300px] border border-gray-300 shadow-2xl p-8 flex flex-col justify-center bg-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2D708E] text-white font-bold text-center py-3 px-4 w-[90%] text-lg h-20 flex">
                            <h1 className="mt-auto mb-auto ml-auto mr-auto">Análises de Associação</h1>
                        </div>
                        <p className="text-[#555] text-center font-bold text-md leading-relaxed mt-4">
                            Avaliamos a força da relação entre diferentes variáveis para entender se elas estão, de fato, conectadas de forma relevante.
                        </p>
                    </div>

                </div>
            </div>

            {/* Benefício */}
            <div className="pt-24 pb-24 text-center mt-24 bg-[#2F83AC]" style={{
                backgroundImage: 'none',
                ...(window.innerWidth >= 1024 && {
                    backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(${BeneficiosImage})
      `
                })
            }}>
                <h1 className="font-bold text-4xl text-white">O BENEFÍCIO DIRETO PARA O SEU PROJETO</h1>
                <img src={BeneficiosMobile} className="w-[75%] max-w-[500px] lg:hidden ml-auto mr-auto"></img>
                <p className="ml-auto mr-auto mt-12 text-justify lg:w-[900px] font-semibold lg:text-2xl text-lg pl-8 pr-8 text-white">Com a validação estatística, você obtém a <span className="text-[#A3F2F7]">certeza de que suas conclusões são defensáveis e baseadas em evidências matemáticas</span>, não em sorte. Isso permite publicar um achado, lançar uma iniciativa ou implementar uma mudança com um nível muito maior de segurança e credibilidade.</p>
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

export default ValidacaoEstatistica