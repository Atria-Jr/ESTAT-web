import fotoTime from '../assets/Quem Somos/foto-time.png';
import fotoUnicamp from '../assets/Quem Somos/bg-unicamp.png';
import bgMissao from '../assets/Quem Somos/bg-missao.png';
import bgVisao from '../assets/Quem Somos/bg-visao.png';
import Slider from '../components/Slider/slider';
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';

function QuemSomos() {
    const [slideAtivo, setSlideAtivo] = useState(0);
    const [swiper, setSwiper] = useState<any | null>(null);

    const settings = {
        centeredSlides: true,
        slidesPerView: 2.5,
        spaceBetween: 10,
        onSwiper: (s:any) => setSwiper(s),
        onSlideChange: (swiper:any) => setSlideAtivo(swiper.realIndex)
    };
    const imagensCarrossel = Object.values(
        import.meta.glob('../assets/Quem Somos/*.svg', { eager: true, import: 'default' })
    ) as string[];


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

            <section className='w-[100%] pt-[40%] pb-[15%] px-5 text-center text-white bg-cover bg-black/90' style={{ backgroundImage: `url(${bgMissao})`}}>
                <h1 className='text-4xl font-bold'>Nossa Missão</h1>
                <p>Impactar nossos membros e a sociedade por meio de serviços estatísticos de qualidade e vivência empresarial a fim de uma mesma causa.</p>
            </section>
            
            <section className='bg-[#1A485B] py-10'>
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

            <section className='w-[100%] pt-[40%] pb-[15%] px-5 text-center text-white bg-cover bg-black/90' style={{ backgroundImage: `url(${bgVisao})`}}>
                <h1 className='text-4xl font-bold'>Nossa Visão</h1>
                <p>Ser uma empresa Alto Impacto, referência em Estatística e reconhecida pela união e propósito da equipe.</p>
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
        `}</style>
    );
}