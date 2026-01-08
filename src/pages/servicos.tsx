import bgTop from '../assets/Serviços/bg-top.png';
import analise from '../assets/Serviços/analise.svg';
import business from '../assets/Serviços/business-inteligence.svg';
import consultoria from '../assets/Serviços/consultoria.svg';
import validacao from '../assets/Serviços/validacao.svg';
import machine from '../assets/Serviços/machine-learning.svg';
import planejamento from '../assets/Serviços/planejamento.svg';
import seta from '../assets/Serviços/seta.svg';

function Servicos() {
    return <main>
        <section className='py-5 mt-3 bg-cover' style={{backgroundImage:`url(${bgTop})`}}>
            <h1 className='text-xl lg:text-3xl text-white font-bold text-center py-5'>Conheça os Nossos Serviços</h1>
        </section>

        <section className='md:px-10'>
            <h2 className='text-center my-[50px] text-[#329BD5] font-bold text-lg lg:text-3xl'>Impulsione o sucesso do seu negócio com...</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center items-center gap-10 px-2 max-w-[1600px] mx-auto'>
                <article className='flex flex-col items-center gap-3 max-w-[400px] md:max-w-[385px] lg:max-w-[480px] aspect-square border-[#329BD5] border-3 p-5'>
                    <h3 className='text-[#329BD5] text-center font-bold lg:text-2xl'>Análise de Dados</h3>
                    <img src={analise} alt="Análise de Dados" className='px-4'/>
                    <p className='text-justify text-sm lg:text-base font-medium flex-1'>A análise de dados é um procedimento de averiguação, limpeza, transformação e modelagem de dados com o objetivo de encontrar informações úteis, apresentar conclusões e contribuir na tomada de decisões.</p>
                    <a href="/servicos/analise-de-dados" className='text-white bg-[#2F83AC] w-fit px-3 py-1 pointer'>Saiba Mais</a>
                </article>

                <article className='flex flex-col items-center gap-3 max-w-[400px] md:max-w-[385px] lg:max-w-[480px] aspect-square border-[#329BD5] border-3 p-5'>
                    <h3 className='text-[#329BD5] text-center font-bold lg:text-2xl'>Business Intelligence</h3>
                    <img src={business} alt="Business Intelligence" className='px-4'/>
                    <p className='text-justify text-sm lg:text-base font-medium flex-1'>Business Intelligence é o processo de coleta, organização, análise, compartilhamento e controle de informações.</p>
                    <a href="/servicos/business-intelligence" className='text-white bg-[#2F83AC] w-fit px-3 py-1 pointer'>Saiba Mais</a>
                </article>

                <article className='flex flex-col items-center gap-3 max-w-[400px] md:max-w-[385px] lg:max-w-[480px] aspect-square border-[#329BD5] border-3 p-5'>
                    <h3 className='text-[#329BD5] text-center font-bold lg:text-2xl'>Consultoria Estatística</h3>
                    <img src={consultoria} alt="Consultoria Estatística" className='px-4'/>
                    <p className='text-justify text-sm lg:text-base font-medium flex-1'>Nossa Consultoria Analítica acompanha seu negócio em toda a jornada dos dados, garantindo que cada etapa, da coleta inicial à análise final, seja executada com máxima eficiência.</p>
                    <a href="#" className='text-white bg-[#2F83AC] w-fit px-3 py-1 pointer'>Saiba Mais</a>
                </article>

                <article className='flex flex-col items-center gap-3 max-w-[400px] md:max-w-[385px] lg:max-w-[480px] aspect-square border-[#329BD5] border-3 p-5'>
                    <h3 className='text-[#329BD5] text-center font-bold lg:text-2xl'>Validação Estatística</h3>
                    <img src={validacao} alt="Validação Estatística" className='px-4'/>
                    <p className='text-justify text-sm lg:text-base font-medium flex-1'>Nosso serviço de Validação Estatística aplica rigorosos testes matemáticos para confirmar suas hipóteses, oferecendo a segurança de que seus achados são confiáveis...</p>
                    <a href="/servicos/validacao-estatistica" className='text-white bg-[#2F83AC] w-fit px-3 py-1 pointer'>Saiba Mais</a>
                </article>

                <article className='flex flex-col items-center gap-3 max-w-[400px] md:max-w-[385px] lg:max-w-[480px] aspect-square border-[#329BD5] border-3 p-5'>
                    <h3 className='text-[#329BD5] text-center font-bold lg:text-2xl'>Machine Learning (Modelagem Estatística)</h3>
                    <img src={machine} alt="machine learning" className='px-4'/>
                    <p className='text-justify text-sm lg:text-base font-medium flex-1'>Nosso serviço de Modelagem Estatística vai além da análise comum, criando "receitas" matemáticas que não apenas explicam os padrões em seus dados, mas também os utilizam para fazer previsões confiáveis.</p>
                    <a href="/servicos/machine-learning" className='text-white bg-[#2F83AC] w-fit px-3 py-1 pointer'>Saiba Mais</a>
                </article>

                <article className='flex flex-col items-center gap-3 max-w-[400px] md:max-w-[385px] lg:max-w-[480px] aspect-square border-[#329BD5] border-3 p-5'>
                    <h3 className='text-[#329BD5] text-center font-bold lg:text-2xl'>Planejamento de Experimento</h3>
                    <img src={planejamento} alt="Planejamento de Experimento" className='px-4'/>
                    <p className='text-justify text-sm lg:text-base font-medium flex-1'>Não arrisque suas conclusões com dados duvidosos. Nosso serviço de Planejamento de Experimento garante que sua pesquisa ou teste gere resultados precisos e acionáveis, otimizando seus recursos e eliminando os achismos.</p>
                    <a href="servicos/planejamento-estrategico" className='text-white bg-[#2F83AC] w-fit px-3 py-1 pointer'>Saiba Mais</a>
                </article>
            </div>
        </section>

        <section className='my-15 px-10'>
            <h2 className='bg-[#1A485B] text-center text-white font-semibold py-5 px-15'>Tem interesse em algum dos nossos serviços? Entre em contato conosco</h2>
        </section>

        <section className='my-15 flex justify-center items-end gap-5'>
            <img src={seta} alt="seta" className='lg:hidden w-[40px] sm:w-[80px] mb-5'/>
            <a href="https://wa.me/551935216073" target='_blank' className='w-[300px] h-[68px] bg-[#1A485B] text-center text-white font-semibold text-lg px-2 md:px-15 py-5'>CONTATE-NOS</a>
            <img src={seta} alt="seta" className='lg:hidden transform scale-x-[-1] w-[40px] sm:w-[80px] mb-5' />
        </section>
    </main>;
}

export default Servicos;