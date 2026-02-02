import bgTop from '../assets/business-intelligence/hero-fundo.png'

import img1 from '../assets/analisededados/442bec9c38a6a711d39854648c23adcb34aa1964.png'
import img2 from '../assets/analisededados/528b7877b11173c33c2882c59e581dd76c4f89e9.png'
import img3 from '../assets/business-intelligence/analise.png'
import img4 from '../assets/analisededados/711e327a0ef7b868c319c4951fb73365cbc7a8f7 (1).png'
import img5 from '../assets/analisededados/896aeb08c7810599e7e868e261ee164e7160c47d.png'
import img7 from '../assets/analisededados/ec5e44f6a3b3824fce794ade48bf4dfb5c3f3204.png'

function BusinessIntelligence() {
  return (
     <main>
      {/* HERO */}
      <section className='w-full'>
        {/* MOBILE */}
        <div className='md:hidden w-full'>
          {/* imagem full width, sem “faixa branca” */}
          <img
            src={bgTop}
            alt='Mão segurando gráfico'
            className='w-full h-[320px] object-cover block'
          />

          {/* degradê colado na imagem (sem gap) */}
          <div className='w-full bg-gradient-to-r from-[#1A485B] to-[#3799C1] relative pt-16 pb-10 px-5'>
            {/* Box do título: a BORDA “vaza” pra imagem de cima, mas o texto fica dentro do degradê */}
            <div className='absolute left-1/2 -translate-x-1/2 -top-12 w-[92%] max-w-[520px] z-20'>
  <div className='border-[3px] border-white px-12 py-10 flex items-center justify-center'>
    <h1 className='text-white font-extrabold text-2xl leading-[1] text-center'>
      Business Intelligence
    </h1>
  </div>
</div>

            <p className='mt-6 text-white/95 text-sm leading-relaxed'>
              Seus dados contêm as respostas para o crescimento do seu negócio, mas encontrá-las pode ser um desafio. Nosso serviço de <strong>Business
              Intelligence (BI)</strong> conecta, organiza e transforma seus números brutos em painéis visuais e relatórios claros, permitindo que você pare
              de supor e comece a agir com base em fatos.
            </p>
          </div>
        </div>

        {/* DESKTOP */}
<div className=' pt-20 hidden md:block bg-white relative overflow-hidden'>
  <div className='max-w-7xl mx-auto px-4'>
    <div className='relative py-12 lg:py-16'>
      
      {/* Imagem presa na direita (sem mexer no tamanho dela) */}
      <div className="absolute inset-y-0 right-0 left-[390px] lg:left-[640px] w-[85%] h-full">

        <div className='relative h-[280px] lg:h-[370px]'>
          <img
            src={bgTop}
            alt='Mão segurando gráfico'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-[#2A5F7B]/55' />
        </div>
      </div>

      {/* Conteúdo à esquerda (nunca fica coberto) */}
      <div className='relative z-10 pr-[55%] pt-10'>
        <div className='inline-block  border-[5px] border-[#329BD5] px-12 lg:px-20 py-12 lg:py-12 -mr-10 lg:-mr-14'>
          <h1 className='text-[#329BD5] font-extrabold text-4xl lg:text-5xl leading-tight whitespace-nowrap'>
            Business Intelligence
          </h1>
        </div>
      </div>
    </div>

    {/* Texto descritivo abaixo do título + imagem */}
    <div className='  pb-12 pt-18 lg:pb-16'>
      <p className='text-[#515255] text-2xl lg:text-3xl leading-relaxed text-left font-medium max-w-6xl'>
        Seus dados contêm as respostas para o crescimento do seu negócio, mas encontrá-las pode ser um desafio. Nosso serviço de{' '}
        <strong>Business Intelligence (BI)</strong> conecta, organiza e transforma seus números brutos em painéis visuais e relatórios claros,
        permitindo que você pare de supor e comece a agir com base em fatos.
      </p>
    </div>
  </div>
</div>
      </section>

      {/* Intro + O que é BI */}
      <section className='py-14 bg-[#235F77] text-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='font-bold text-2xl lg:text-3xl mb-6'>O que é business intelligence?</h2>
          <p className='text-white/90 max-w-3xl mx-auto'>
            Business Intelligence é o processo de coleta, organização, análise, compartilhamento e controle de informações.
          </p>
        </div>
      </section>

      {/* Nossas entregas (com espaço embaixo para a imagem "vazar" - desktop e mobile) */}
      <section className='py-10 pb-24 sm:pb-28 md:pb-44 bg-white relative'>
        <div className='max-w-6xl mx-auto px-4'>
          <h3 className='text-center text-xl lg:text-2xl font-semibold text-[#2F83AC] mb-8'>Nossas Entregas para Potencializar seu Negócio</h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <article className='bg-white border-4 border-[#2F83AC] p-6 shadow-md'>
              <h4 className='font-bold text-lg mb-3 text-[#2F83AC]'>Dashboards Interativos</h4>
              <p className='text-sm text-[#235F77]'>
                Criamos painéis que centralizam suas métricas mais importantes em tempo real, permitindo uma análise intuitiva e secundada com apenas
                alguns cliques.
              </p>
            </article>

            <article className='bg-white border-4 border-[#2F83AC] p-6 shadow-md'>
              <h4 className='font-bold text-lg mb-3 text-[#2F83AC]'>Análise de Tendências e Padrões</h4>
              <p className='text-sm text-[#235F77]'>
                Analise o comportamento dos seus dados ao longo do tempo, permitindo que você entenda a sazonalidade, antecipe cenários e planeje o
                futuro com mais segurança.
              </p>
            </article>

            <article className='bg-white border-4 border-[#2F83AC] p-6 shadow-md'>
              <h4 className='font-bold text-lg mb-3 text-[#2F83AC]'>Segmentação de Clientes e Produtos</h4>
              <p className='text-sm text-[#235F77]'>
                Agrupamos seus dados para revelar quem são seus clientes mais valiosos, quais produtos têm melhor desempenho e onde estão suas maiores
                oportunidades de mercado.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Benefício direto + imagem ao lado, "vazando" para a seção branca de cima (desktop e mobile) */}
      <section className='bg-[#235F77] text-white relative overflow-visible'>
        <div className='max-w-6xl mx-auto px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            {/* Imagem */}
            <div className='flex justify-center md:justify-end -mt-20 sm:-mt-16 md:-mt-32 relative z-20'>
              <img
                src={img3}
                alt='BI - visualização de dados'
                className='w-full max-w-md shadow-2xl '
              />
            </div>

            {/* Texto */}
            <div className='md:text-left text-center relative z-10'>
              <h3 className='text-xl lg:text-2xl font-semibold mb-6'>O Benefício Direto para Seu Negócio</h3>

              <p className='text-white/90 mb-4 max-w-xl md:mx-0 mx-auto'>
                Com uma solução de BI, sua gestão ganha <strong>clareza e controle</strong> para tomar decisões mais{' '}
                <strong>rápidas e inteligentes</strong>. O resultado é a capacidade de reduzir custos, aumentar a eficiência e alinhar toda a empresa em
                torno de metas e resultados mensuráveis.
              </p>

              <p className='text-white/90 max-w-xl md:mx-0 mx-auto'>
                Tome o controle das suas decisões. Fale com nossos especialistas e transforme os dados da sua empresa em uma vantagem competitiva.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* Diferenciais */}
      <section className='py-14'>
        <div className='max-w-5xl mx-auto px-4'>
          <h3 className='text-center text-xl lg:text-2xl font-semibold text-[#235F77] mb-10'>Nossos Diferenciais</h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
              <img src={img4} className='w-28 mb-5' alt='Atendimento' />
              <div>
                <h4 className='font-semibold text-[#235F77] text-base mb-2'>Recebe um atendimento humano e personalizado no canal de comunicação que preferir;</h4>
              </div>
            </article>

            <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
              <img src={img7} className='w-28 mb-5' alt='Padrões' />
              <div>
                <h4 className='font-semibold text-[#235F77] text-base mb-2'>Ganha a capacidade de identificar padrões, comparar resultados e detectar anomalias;</h4>
              </div>
            </article>

            <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
              <img src={img1} className='w-28 mb-5' alt='Processo' />
              <div>
                <h4 className='font-semibold text-[#235F77] text-base mb-2'>
                  Realiza esse processo de forma rápida, fundamentando suas provisões, conclusões e estratégias em evidências sólidas, mesmo sem
                  conhecimento técnico avançado.
                </h4>
              </div>
            </article>

            <article className='bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square'>
              <div className='flex items-center gap-3 mb-5'>
                <img src={img5} className='w-20' alt='Preço' />
                <img src={img2} className='w-20' alt='Unicamp' />
              </div>
              <div>
                <h4 className='font-semibold text-[#235F77] text-base mb-2'>Tudo isso com o padrão de qualidade Unicamp e com preços abaixo do mercado!</h4>
              </div>
            </article>
          </div>
        </div>
      </section>

     {/* CTA */}
      <section className='py-16 bg-white'>
        <div className='max-w-5xl mx-auto px-4'>
          {/* Caixa com borda */}
          <div className='border-4 border-[#235F77] p-8 mb-12'>
            <p className='text-[#235F77] text-xl lg:text-2xl font-semibold text-center leading-relaxed'>
              Não baseie suas decisões no acaso. Fale com nossos especialistas e valide seus resultados com rigor científico.
            </p>
          </div>

          {/* Botão centralizado */}
          <div className='flex justify-center'>
            <a 
              href='https://wa.me/551935216073' 
              target='_blank' 
              rel='noreferrer' 
              className='bg-[#235F77] text-white px-16 py-4 font-bold text-lg hover:bg-[#1e5165] transition-colors'
            >
              CONTATE-NOS
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BusinessIntelligence
