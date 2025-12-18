import bgTop from "../assets/Planejamento/bg-top.png";
import peopleDesktop from "../assets/Planejamento/people-oval-style.png";
import peopleMobile from "../assets/Planejamento/people-wave-style.svg";

function Planejamento() {



    return (
        <main>
            <section className="bg-linear-to-br to-[#1A485B] from-[#2c86aa] p-5 text-white flex flex-col items-center">
                <div className="max-w-xl lg:flex flex-row-reverse items-center justify-center lg:mt-10">
                    <img src={bgTop} alt="Pessoas estudando gráficos" className="brightness-50 lg:-ml-50 "/>
                    <h1 className="text-center font-bold text-xl border-2 pt-8 pb-2 mx-4 -translate-y-5 shrink-0 lg:pl-20 lg:pr-50 lg:py-5 lg:mt-10 lg:text-start lg:text-2xl">Planejamento de <br className="hidden lg:block"/>Experimento</h1>
                </div>

                <div className="text-sm lg:text-lg mx-5 max-w-xl lg:max-w-2xl mt-3 mb-20 lg:mt-10">
                    <p className="mb-3">Não arrisque suas conclusões com dados duvidosos. Nosso serviço de Planejamento de Experimento garante que sua pesquisa ou teste gere resultados precisos e acionáveis, otimizando seus recursos e eliminando os achismos.</p>
                    <p>Antes de iniciar a coleta, nós desenhamos a estrutura completa do seu projeto para garantir a validade estatística dos resultados.</p>
                </div>
            </section>

            <section className="pb-30">
                <div className="bg-[#1A485B] text-white text-center px-5 pt-10 pb-25">
                    <h1 className="font-bold text-3xl max-w-[600px] mx-auto">Nossos Pilares para um Estudo de Qualidade</h1>
                </div>

                <div className="sm:bg-linear-to-b from-[#1A485B] from-20% to-white to-20% text-center text-sm font-medium flex flex-wrap gap-x-10 justify-center gap-y-15">
                    <div className="bg-white shadow shadow-neutral-900 aspect-10/11 max-w-[220px] sm:max-w-[280px] px-2 sm:px-8">
                        <div className="bg-[#266C8B] min-h-10 text-white -translate-y-[50%] tracking-tighter py-2 px-2 box-content">
                            <h3>Questionários e Formulários Otimizados</h3>
                        </div>
                        <p className="sm:text-lg">Criamos ferramentas de coleta de dados claras e focadas para extrair as respostas que realmente importam para os seus objetivos.</p>
                    </div>
                    <div className="bg-white shadow shadow-neutral-900 aspect-10/11 max-w-[220px] sm:max-w-[280px] px-2 sm:px-8">
                        <div className="bg-[#266C8B] min-h-10 text-white -translate-y-[50%] tracking-tighter py-2 px-2 box-content">
                            <h3 className="translate-y-[50%]">Definição de Variáveis-chave</h3>
                        </div>
                        <p className="sm:text-lg">Identificamos as métricas essenciais para sua investigação, garantindo que a análise final seja 100% relevante e estratégica.</p>
                    </div>
                    <div className="bg-white shadow shadow-neutral-900 aspect-10/11 max-w-[220px] sm:max-w-[280px] px-2 sm:px-8">
                        <div className="bg-[#266C8B] min-h-10 text-white -translate-y-[50%] tracking-tighter py-2 px-2 box-content">
                            <h3 className="translate-y-[50%]">Cálculo Amostral Estatístico</h3>
                        </div>
                        <p className="sm:text-lg">Definimos o público e o tamanho exato da amostra para que seus resultados sejam representativos e possam ser generalizados com segurança.</p>
                    </div>
                </div>
            </section>

            <section className="bg-[#1A485B] font-bold text-white py-15 md:pt-0 md:pb-5">
                <div className="md:grid md:grid-cols-2 max-w-[1500px] mx-auto">
                    <img src={peopleDesktop} alt="Pessoas assistindo uma palestra" className="hidden md:block"/>
                    <div className="flex flex-col justify-center max-w-[500px] xl:max-w-[800px] mx-auto">
                        <h1 className="md:text-lg xl:text-2xl text-center mb-8">O Benefício Direto para Seu Projeto</h1>
                        <p className="text-xs md:text-sm xl:text-base text-justify px-10 max-w-[550px] xl:max-w-[800px] mx-auto">Com um planejamento robusto, você <span className="text-[#A3F2F7]">minimiza riscos</span>, <span className="text-[#A3F2F7]">economiza recursos</span> e <span className="text-[#A3F2F7]">ganha segurança</span> para tirar conclusões de alto impacto, seja para validar uma hipótese, testar uma intervenção ou analisar um público-alvo.</p>
                    </div>
                </div>

                <img src={peopleMobile} alt="Pessoas assistindo uma palestra" className="md:hidden w-full my-5"/>

                <p className="text-[#A3F2F7] text-xs md:text-sm xl:text-base text-center px-2 max-w-[500px] mx-auto">Transforme dados em conhecimento concreto. Fale com nossos especialistas e estruture seu próximo projeto com a máxima confiança.</p>
            </section>
        </main>
    )
}

export default Planejamento;