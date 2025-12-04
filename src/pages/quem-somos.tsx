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
        </main>
    );
}

export default QuemSomos