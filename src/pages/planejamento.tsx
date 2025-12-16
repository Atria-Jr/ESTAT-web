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
        </main>
    )
}

export default Planejamento;