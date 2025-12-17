import bgTop from "../assets/Planejamento/bg-top.png";
import peopleDesktop from "../assets/Planejamento/people-oval-style.png";
import peopleMobile from "../assets/Planejamento/people-wave-style.png";

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
        </main>
    )
}

export default Planejamento;