import analiseCluster from "../assets/machine-learning/analise-cluster.png";
import redesNeurais from "../assets/machine-learning/redes-neurais.png";
import modelosRegressao from "../assets/machine-learning/modelos-regressao.png";
import analiseSeries from "../assets/machine-learning/analise-series.png";
import topoModelagem from "../assets/machine-learning/Topo-Modelagem.png";

function MachineLearning() {


    return (
        <main>
            <section  className="text-white text-center p-5 py-10 lg:py-20" style={{ backgroundImage: `url(${topoModelagem})`}}>
                <div className="max-w-[1024px] mx-auto">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-3">Machine Learning</h1>
                    <p className="md:hidden font-medium">Entender o passado é importante, mas antecipar o futuro é decisivo.</p>
                    <p className="hidden md:block font-medium lg:text-lg">Entender o passado é importante, mas antecipar o futuro é decisivo.<br/>
                    Com nossos modelos estatísticos e técnicas de machine learning, você transforma dados em previsões reais, reduz incertezas e toma decisões com base em evidências.</p>
                </div>
            </section>

            <section className="text-center pt-5 px-5">
                <h2 className="large-title mb-5">O que é <br className="md:hidden"/><span className="underline md:no-underline">Machine Learning?</span></h2>
                <p className="max-w-[800px] mx-auto font-medium">Criamos “receitas matemáticas” que explicam como suas variáveis se comportam e que permitem prever o que vem pela frente.</p>
                
                <h3 className="text-xl text-center font-semibold p-5 max-w-[800px] mx-auto">Nossos modelos aprendem com o histórico e revelam padrões que impulsionam resultados!</h3>
            </section>

            <section>
                <h2 className="large-title text-center tracking-tighter">Técnicas que aplicamos</h2>

                <div className="max-w-[1024px] mx-auto">
                    <div className="p-3 text-white text-center grid md:grid-cols-2 md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_400px] gap-4 justify-items-center">
                        <div className="px-3 py-5 max-w-[400px] md:max-w-[650px] bg-cover" style={{backgroundImage:`url(${redesNeurais})`}}>
                            <h3 className="text-lg font-semibold">Redes Neurais e Modelos Avançados</h3>
                            <p>Aplicamos técnicas de IA e deep learning para identificar relações complexas e previsões de alta acurácia.</p>
                        </div>
                        <div className="px-3 py-5 max-w-[400px] md:max-w-[none] bg-cover" style={{backgroundImage:`url(${modelosRegressao})`}}>
                            <h3 className="text-lg font-semibold">Modelos de Regressão</h3>
                            <p>Prevemos resultados numéricos ou categóricos, entendendo como cada fator influencia seus indicadores.</p>
                        </div>
                    </div>
                    <div className="p-3 text-white text-center grid md:grid-cols-2 md:grid-cols-[350px_1fr] lg:grid-cols-[400px_1fr] gap-4 justify-items-center">
                        <div className="px-3 py-5 max-w-[400px] md:max-w-[none] bg-cover" style={{backgroundImage:`url(${analiseCluster})`}}>
                            <h3 className="text-lg font-semibold">Análise de Cluster</h3>
                            <p>Agrupamos seus dados em perfis e segmentos, revelando padrões ocultos e oportunidades estratégicas.</p>
                        </div>
                        <div className="px-3 py-5 max-w-[400px] md:max-w-[650px] bg-cover" style={{backgroundImage:`url(${analiseSeries})`}}>
                            <h3 className="text-lg font-semibold">Análise de Séries Temporais</h3>
                            <p>Projetamos o comportamento de dados ao longo do tempo para antecipar tendências e demandas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#1A485B] text-white text-center px-3 py-5 lg:py-10 my-10">
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tighter">O que você ganha com isso?</h2>
                <p className="lg:text-xl">O poder de prever — e decidir com confiança.</p>
            </section>

            <section className="p-5">
                <div className="max-w-[1024px] mx-auto">
                    <h2 className="text-[#329BD5] text-2xl font-semibold tracking-tighter">Com um modelo estatístico robusto, sua empresa passa a:</h2>
                
                    <ul className="list-disc pl-5 my-3 text-sm md:text-lg font-semibold">
                        <li>Antecipar comportamentos e tendências</li>
                        <li>Otimizar processos e recursos</li>
                        <li>Reduzir riscos e detectar fraudes</li>
                        <li>Tomar decisões embasadas e estratégicas</li>
                    </ul>
                </div>

                <a href="https://wa.me/551935216073" target='_blank' className='w-[300px] h-[68px] bg-[#1A485B] text-center text-white font-semibold text-lg px-2 md:px-15 py-5 m-auto block'>CONTATE-NOS</a>
            </section>

            <section className="bg-[#1A485B] text-white text-center px-3 py-5">
                <h3 className="text-xl font-semibold tracking-tighter">Pare de apenas olhar para o passado.</h3>
                <p className="text-sm lg:text-base font-medium max-w-[800px] mx-auto">Fale com nossos especialistas e comece a prever o futuro com seus próprios dados. Vamos transformar informação em inteligência e estatística em estratégia.</p>
            </section>
        </main>
    )
}

export default MachineLearning