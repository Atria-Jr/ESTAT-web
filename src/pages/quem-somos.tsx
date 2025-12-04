import fotoTime from '../assets/Quem Somos/foto-time.png';
import fotoUnicamp from '../assets/Quem Somos/bg-unicamp.png';

function QuemSomos() {
    return (
        <main>
            <section className="bg-blend-multiply bg-black/85 text-white p-5" style={{ backgroundImage: `url(${fotoUnicamp})`}}>
                <h1 className="large-title underline">Quem Somos</h1>
                <p>
                    Somos a empresa júnior de Estatística da UNICAMP, fundada em 1991. Atuamos há mais de 30 anos transformando dados em resultados por meio de consultoria estatística realizada por graduandos, com orientação de professores e profissionais convidados.
                    <br/><br/>
                    Nossa proposta é dupla: gerar impacto real para clientes com soluções baseadas em evidência e formar pessoas por meio de projetos práticos que conectam universidade e mercado. Como parte do Movimento Empresa Júnior (MEJ), operamos sem fins lucrativos e com foco em aprendizado e impacto.
                    <br/><br/>
                </p>
                <div className="flex justify-center">
                    <img src={fotoTime} alt="Foto do time" />
                </div>
            </section>

            <section className='px-6 py-10'>
                <h1 className="large-title">Nossa história</h1>
                <h3 className="font-medium">Alguns marcos da Estat Jr</h3>

                <ul id="timeline" className="list-disc-none flex flex-col gap-2 mt-5 pt-5 border-l-4 border-black">
                    <li>
                        <strong>1991</strong>
                        <p>Fundação da Estat Junior na UNICAMP. Primeiros projetos de consultoria estatística com a comunidade.</p>
                    </li>
                    <li>
                        <strong>2000</strong>
                        <p>Ampliação do portifólio: pesquisas de mercado, opinião e apoio a laboratórios e TCCs.</p>
                    </li>
                    <li>
                        <strong>2010</strong>
                        <p>Profissionalização de processos, certificações internas e aumento de impacto no MEJ.</p>
                    </li>
                    <li>
                        <strong>2021</strong>
                        <p>30 anos de Estat Junior: celebração da jornada e plano de futuro orientado a dados.</p>
                    </li>
                    <li>
                        <strong>2025</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus animi praesentium delectus?</p>
                    </li>
                </ul>
            </section>

            <TagStyles/>
        </main>
    );
}

export default QuemSomos

export function TagStyles() {
    return (
        <style>{`
            li::before {
                display: inline-block;
                margin-right: 5px;
                content: "";
                height: 12px;
                width: 12px;
                border-radius: 50%;
                background-color: #5a94ff;
            }

            li {
                margin-left:-8px;
                min-height: 80px;
            }

            li p {
                margin-left: 20px;
                line-height: 1;
                font-size: 14px;
                font-weight: 500;
            }
            
            li strong {
                font-size: 24px;
            }
        `}</style>
    );
}