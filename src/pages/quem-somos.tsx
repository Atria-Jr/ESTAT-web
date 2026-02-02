import fotoTime from '../assets/quem-somos/foto-time.svg';
import fotoUnicamp from '../assets/quem-somos/bg-unicamp.png';
import bgMissao from '../assets/quem-somos/bg-missao.svg';
import bgVisao from '../assets/quem-somos/bg-visao.svg';
import Slider from '../components/slider/slider';
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';

function QuemSomos() {
    const [slideAtivo, setSlideAtivo] = useState(0);
    const [swiper, setSwiper] = useState<any | null>(null);
    const [anoSelecionado, setAnoSelecionado] = useState<number | null>(2025);

    const settings = {
        centeredSlides: true,
        slidesPerView: 2.5,
        spaceBetween: 10,
        onSwiper: (s:any) => setSwiper(s),
        onSlideChange: (swiper:any) => setSlideAtivo(swiper.realIndex)
    };
    const imagensCarrossel = Object.values(
        import.meta.glob('../assets/quem-somos/carrossel/*.svg', { eager: true, import: 'default' })
    ) as string[];
    const anos = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
    const nomes: Record<number, string[]> = {
        2025: ["Akemi Vanessa Higa Hayashi", "Alexandre Araujo Seignemartin", "Ana Carolina Alves Oliveira", "Ana Cristina Yumi Utsumi", "Anderson Gabriel dos Reis Ortelan", "Beatriz Heloise Messias", "Beatriz Miranda Ferreira", "Berenice Antunes de Oliveira Barbosa", "Brenda Alessandra Muro Mathey", "Caroline da Silva Mangile", "Cássia Aparecida Scorsolino", "Dieine Caroline Martins do Nascimento", "Gabriela Lima", "Hugo Alves", "Isabela Pinto"],
        2024: ["Felipe Arlanche Petri", "Felipe Laurindo dos Santos", "Gabriel Paschoal Stein", "Gabrielly Baratela de Carvalho", "Giovanna Miyuki Yoshida", "Giovanni Souza Samartini", "Gustavo de Almeida Leiva", "Gustavo Sanches Guaragna", "Helton Marinho de Ávila"],
        2023: ["Aline Bernal de Freitas", "Amanda Montezano de Almeida", "Ana Julia Cunha e Silva", "Ana Luiza Ferreira Viana", "Arthur Kung Loon Moriwaki Chau", "Bianca Aires de Sousa", "Bianca da Silva dos Santos", "Caio Théodore Genovese Huss Oliveira", "Carolina Medeiros Argentino", "Daniel Lopes Toso", "Eloá Ribeiro", "Felipe de Albuquerque Marques", "Felipe Scalabrin Dosso", "Gabriela Namie Hidaka", "Gabriella Bezerra Moura", "Gisele Silva Amorim", "Gustavo Chiaradia Barbosa Marques", "Helena Marcolino Neder", "Isabella Nascimento Peres da Silva", "João Pedro de Campos Formigari", "Júlia Ramírez Vidoto", "Lara Maria Herrera Drugowick", "Leonardo dos Santos", "Lucas Beltrame Antonucci", "Lucas Perondi Kist", "Malcolm dos Reis Alves Pereira", "Natalia Therezinha Negri", "Nathan Augusto Elias", "Nicole Maestri Meyer", "Pedro Constantino de Freitas", "Pedro Luis Rebollo", "Rafael Maniezo Pereira de Souza", "Rafaela da Silva Barril", "Rayssa Santiago Germano", "Rubens Cortelazzi Roncato", "Tatiana Naomi John", "Tiago Henrique Silva Monteiro", "Vanessa Aparecida Fernandes", "Vitor Ribas Perrone"],
        2022: ["Aline Bernal de Freitas", "Amanda Montezano de Almeida", "Bruno Martinez de Farias", "Ana Beatriz Tuguimoto Garcia", "Ana Luiza Ferreira Viana", "Bianca Barbosa Schorles", "Bianca da Silva dos Santos", "Brenda Beatriz dos Santos", "Caio Théodore Genovese Huss Oliveira", "Carolina Medeiros Argentino", "Daniela Konno", "Décio Miranda Filho", "Felipe de Albuquerque Marques", "Gabriela Namie Hidaka", "Gabriella Bezerra Moura", "Helena Marcolino Neder", "Igor Mello Silva", "Isabella Nascimento Peres da Silva", "João Pedro de Campos Formigari", "Júlia Ramírez Vidoto", "Kalissa Marina de Oliveira Henrique", "Lara Maria Herrera Drugowick", "Lauren Gabriele Lima Theodoro", "Lucas Beltrame Antonucci", "Lucas Luiz de Castro Gomes", "Lucas Perondi Kist", "Malcolm dos Reis Alves Pereira", "Marcos Vinicius Viotto Zonaro", "Milly Thamy Oishi", "Natália Martins de Paiva", "Natalia Therezinha Negri", "Nicole Maestri Meyer", "Pedro Henrique Galera Elias", "Pedro Luis Rebollo", "Rafael De Sá Suetsugu", "Rafael Maniezo Pereira de Souza", "Rubens Cortelazzi Roncato", "Tainá Maria de Godoi", "Tatiana Naomi John", "Thiago Makoto Fujiwara Miyaji", "Tiago Henrique Silva Monteiro", "Vanessa Aparecida Fernandes", "Vitor Henrique Rizzo de Lábio"],
        2021: ["Akemi Vanessa Higa Hayashi", "André Hungari Rodrigues", "Antonio Felipe de Paula Nunes", "Bianca Barbosa Schorles", "Bianca da Silva dos Santos", "Bruno Martinez de Farias", "Caio Théodore Genovese Huss Oliveira", "Carolina Tae Ishii Hara", "Daniela Konno", "Décio Miranda Filho", "Helena Marcolino Neder", "Hellen Mayra Ribeiro Freitas", "Henrique Scotton Guerra", "Henrique Toshio Lacava Olyntho", "Isabella Nascimento Peres da Silva", "Jonathan Ricardo Smaile Fusco", "Kalissa Marina de Oliveira Henrique", "Lauren Gabriele Lima Theodoro", "Levi Vasconcelos Neves Marinho", "Lucas Luiz de Castro Gomes", "Lucas Perondi Kist", "Marcos Vinicius Viotto Zonaro", "Maria Júlia de Lima Silva", "Milly Thamy Oishi", "Natália Martins de Paiva", "Pedro Henrique Galera Elias", "Pedro Henrique Vannucci Dinamarco", "Rafael De Sá Suetsugu", "Rafael Maniezo Pereira de Souza", "Rubens Cortelazzi Roncato", "Tainá Maria de Godoi", "Thiago Makoto Fujiwara Miyaji", "Vitor Henrique Rizzo de Lábio"],
        2020: ["Akemi Vanessa Higa Hayashi", "Alyce Soares", "Ana Beatriz Tuguimoto Garcia", "André Hungari Rodrigues", "Antonio Felipe de Paula Nunes", "Artur Magalhães Balbão Filippi", "Bianca Barbosa Schorles", "Brenda Alessandra Muro Mathey", "Caio Henrique de Sousa Lima", "Carolina Tae Ishii Hara", "Daniela Konno", "Dieine Caroline Martins do Nascimento", "Francesco Giuseppe Carotti", "Gabrielle Sousa Marques da Silva", "Grasyele Freitas", "Gustavo de Almeida Leiva", "Hellen Mayra Ribeiro Freitas", "Henrique Toshio Lacava Olyntho", "Júlio Mendes Pazelli", "Lauren Gabriele Lima Theodoro", "Leila Ribeiro Cunha", "Leonardo da Silva Araújo", "Levi Vasconcelos Neves Marinho", "Marcelo da Silva Lourenço", "Marcus Vinícius Marchioni Fontes", "Maria Júlia de Lima Silva", "Matheus Chiaradia Barbosa Marques", "Matheus Luis de Souza Alves", "Miguel da Silva Araújo", "Natainá Novaes Silva Barbosa", "Natalia Marcomini Zamperlini", "Nickolas Petit de Melo", "Pedro Henrique Galera Elias", "Pedro Henrique Vannucci Dinamarco", "Rafael De Sá Suetsugu", "Rafael Henrique Delgado Pereira", "Tainá Maria de Godoi", "Thiago Makoto Fujiwara Miyaji", "Vitor Henrique Rizzo de Lábio", "Wesley Cabral Alves"],
        2019: ["Akemi Vanessa Higa Hayashi", "Alyce Soares", "Ana Carolina Alves Oliveira", "Ana Clara Emy Shiraiwa Kuniyoshi", "Ana Clara Estevam Pereira", "Antonio Felipe de Paula Nunes", "Artur Magalhães Balbão Filippi", "Augusto Carvalho D'Arruda Neto", "Beatriz Moreira Amaral", "Brenda Alessandra Muro Mathey", "Bruna Ambar Luiz", "Caio Henrique de Sousa Lima", "Caroline da Silva Mangile", "Dieine Caroline Martins do Nascimento", "Felipe Laurindo dos Santos", "Gabriel Paschoal Stein", "Gabriel Rossini Sardelich", "Gabrielly Baratela de Carvalho", "Giovana Marques Trindade", "Giovanni Torres Chaves", "Gustavo de Almeida Leiva", "Gustavo Sanches Guaragna", "Hellen Mayra Ribeiro Freitas", "Júlio Mendes Pazelli", "Kaio Shinji Hashimoto", "Leonardo da Silva Araújo", "Leticia Helena Porfirio", "Luana Paias Martínez", "Lucas dos Santos Tomaz", "Marcelo da Silva Lourenço", "Marcus Vinícius Marchioni Fontes", "Mariana Aparecida Ferreira", "Matheus Chiaradia Barbosa Marques", "Matheus Luis de Souza Alves", "Natainá Novaes Silva Barbosa", "Nickolas Petit de Melo", "Nicole Nogueira Silva", "Pedro Aurélio Oliveira Morgado", "Pedro Henrique Vannucci Dinamarco", "Rafael Henrique Delgado Pereira", "Renan Cyrillo Lima", "Ricardo Souza Estevez Rodriguez", "Rodrigo Étore Evangelista Ponzetto", "Roger Mainardes dos Reis", "Rômulo Cabral Mangiapelo", "Wesley Cabral Alves", "Victor Gonçalves Rosa", "Wendel Farley Alves Ferreira"],
        2018: ["Akemi Vanessa Higa Hayashi", "Alyce Soares", "Ana Carolina Alves Oliveira", "Ana Clara Emy Shiraiwa Kuniyoshi", "Ana Clara Estevam Pereira", "Antonio Felipe de Paula Nunes", "Artur Magalhães Balbão Filippi", "Augusto Carvalho D'Arruda Neto", "Beatriz Moreira Amaral", "Brenda Alessandra Muro Mathey", "Bruna Ambar Luiz", "Caio Henrique de Sousa Lima", "Caroline da Silva Mangile", "Dieine Caroline Martins do Nascimento", "Felipe Laurindo dos Santos", "Gabriel Paschoal Stein", "Gabriel Rossini Sardelich", "Gabrielly Baratela de Carvalho", "Giovana Marques Trindade", "Giovanni Torres Chaves", "Gustavo de Almeida Leiva", "Gustavo Sanches Guaragna", "Hellen Mayra Ribeiro Freitas", "Júlio Mendes Pazelli", "Kaio Shinji Hashimoto", "Leonardo da Silva Araújo", "Leticia Helena Porfirio", "Luana Paias Martínez", "Lucas dos Santos Tomaz", "Marcelo da Silva Lourenço", "Marcus Vinícius Marchioni Fontes", "Mariana Aparecida Ferreira", "Matheus Chiaradia Barbosa Marques", "Matheus Luis de Souza Alves", "Natainá Novaes Silva Barbosa", "Nickolas Petit de Melo", "Nicole Nogueira Silva", "Pedro Aurélio Oliveira Morgado", "Pedro Henrique Vannucci Dinamarco", "Rafael Henrique Delgado Pereira", "Renan Cyrillo Lima", "Ricardo Souza Estevez Rodriguez", "Rodrigo Étore Evangelista Ponzetto", "Roger Mainardes dos Reis", "Rômulo Cabral Mangiapelo", "Wesley Cabral Alves", "Victor Gonçalves Rosa", "Wendel Farley Alves Ferreira"]
    };


    return (
        <main>
            <section className="bg-black/100 text-white p-5 lg:flex lg:p-[80px]" style={{ backgroundImage: `url(${fotoUnicamp})`}}>
                <div className='basis-2/3'>
                    <h1 className="large-title underline lg:no-underline">Quem Somos</h1>
                    <p>
                        Somos a empresa júnior de Estatística da UNICAMP, fundada em 1991. Atuamos há mais de 30 anos transformando dados em resultados por meio de consultoria estatística realizada por graduandos, com orientação de professores e profissionais convidados.
                        <br/><br/>
                        Nossa proposta é dupla: gerar impacto real para clientes com soluções baseadas em evidência e formar pessoas por meio de projetos práticos que conectam universidade e mercado. Como parte do Movimento Empresa Júnior (MEJ), operamos sem fins lucrativos e com foco em aprendizado e impacto.
                        <br/><br/>
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src={fotoTime} alt="Foto do time" className='w-[80%] basis-1/3 object-contain'/>
                </div>
            </section>

            <section id='historia' className='px-6 py-10 lg:px-[80px] lg:py-[50px]'>
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

            <section className='w-[100%] pt-[40%] pb-[15%] px-5 text-center text-white bg-cover bg-black/90 lg:pt-[20%] lg:pb-[5%]' style={{ backgroundImage: `url(${bgMissao})`}}>
                <h1 className='text-4xl lg:text-5xl font-bold'>Nossa Missão</h1>
                <p className='lg:text-2xl'>Impactar nossos membros e a sociedade por meio de serviços estatísticos de qualidade e vivência empresarial a fim de uma mesma causa.</p>
            </section>
            
            <section className='bg-[#1A485B] py-10 lg:hidden'>
                <h1 className='text-4xl font-bold text-white text-center mb-5'>Nossos Valores</h1>
                
                <Slider settings = {settings}>
                    {imagensCarrossel.map((src, index) => (
                        <SwiperSlide
                        key={index}
                        onClick={() => {
                            if (!swiper) return;
                            if (index === swiper.activeIndex - 1) swiper.slidePrev();
                            if (index === swiper.activeIndex + 1) swiper.slideNext();
                        }}
                        className="flex justify-center items-center transition-all duration-500 ease-in-out">
                            <img src={src} alt={`Imagem ${index}`}/>
                        </SwiperSlide>
                    ))}
                </Slider>

                <div className="flex justify-center gap-2 mt-4">
                {imagensCarrossel.map((_, index) => (
                    <div
                    key={index}
                    onClick={() => swiper?.slideTo(index)}
                    className={"h-3 rounded-full transition-all duration-300 " + (index === slideAtivo ? "w-6 bg-white" : "w-3 bg-white/50")}></div>
                ))}
                </div>

                
            </section>

            <section className='hidden bg-[#1A485B] py-10 lg:flex lg:flex-col lg:items-center'>
                <h1 className='text-4xl lg:text-5xl lg:pb-5 font-bold text-white text-center mb-5'>Nossos Valores</h1>

                <div className='grid grid-cols-3 justify-items-center gap-y-13 lg:w-[1000px]'>
                    { imagensCarrossel.map((src, index) => (
                        <img key={index} src={src} alt={`Imagem ${index}`} className="w-[280px]"/>
                    )) }
                </div>
            </section>

            <section className='w-[100%] pt-[40%] pb-[15%] px-5 text-center text-white bg-cover bg-black/90 lg:pt-[20%] lg:pb-[5%] bg-center' style={{ backgroundImage: `url(${bgVisao})`}}>
                <h1 className='text-4xl lg:text-5xl font-bold'>Nossa Visão</h1>
                <p className='lg:text-2xl'>Ser uma empresa Alto Impacto, referência em Estatística e reconhecida pela união e propósito da equipe.</p>
            </section>

            <section className='w-full p-5 text-center lg:flex lg:flex-col lg:items-center'>
                <h1 className='large-title lg:!text-6xl lg:my-5 cyan pb-3'>Nosso time</h1>

                <div className='rounded bg-[#1A485B] text-white border border-black lg:w-[984px]'>
                    <ul className='list-none flex flex-wrap text-xl font-bold'>
                        {anos.map((ano) => (
                            <li
                                key={ano}
                                onClick={() => setAnoSelecionado(anoSelecionado === ano ? null : ano)}
                                className={
                                    "basis-1/4 lg:basis-1/8 border border-black cursor-pointer transition-colors " +
                                    (anoSelecionado === ano ? "bg-white text-[#1A485B]" : "bg-[#1A485B] text-white")
                                }
                            >
                                {ano}
                            </li>
                        ))}
                    </ul>
                    <ul className='max-h-[320px] lg:max-h-[1000px] overflow-y-auto text-start p-4 font-medium custom-scroll lg:columns-2'>
                        {anoSelecionado && nomes[anoSelecionado].map((nome, index) => (
                            <li key={index}>{nome}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <TagStyles/>
        </main>
    );
}

export default QuemSomos

export function TagStyles() {
    return (
        <style>{`
            #historia li::before {
                display: inline-block;
                margin-right: 5px;
                content: "";
                height: 12px;
                width: 12px;
                border-radius: 50%;
                background-color: #5a94ff;
            }

            #historia li {
                margin-left:-8px;
                min-height: 80px;
            }

            #historia li p {
                margin-left: 20px;
                line-height: 1;
                font-size: 14px;
                font-weight: 500;
            }
            
            #historia li strong {
                font-size: 28px;
            }

            .swiper-slide {
                opacity: 0.6;
                transform: scale(0.85) !important;
                filter: blur(1.3px);
            }

            .swiper-slide-active {
                opacity: 1 !important;
                transform: scale(1) !important;
                filter: blur(0px);
            }

            .cyan {
                color: #1A485B;
            }

            .custom-scroll::-webkit-scrollbar {
                width: 4px;
            }
            .custom-scroll::-webkit-scrollbar-thumb {
                background-color: #ffffffff;
            }
            .custom-scroll::-webkit-scrollbar-track {
                background: #1A485B;
            }
        `}</style>
    );
}