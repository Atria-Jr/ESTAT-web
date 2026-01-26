import bgTop from '../assets/analisededados/d8b7a2fd620ff7be248b14ddbcb9aa05e936bbba.jpg'

import img1 from '../assets/analisededados/442bec9c38a6a711d39854648c23adcb34aa1964.png'
import img2 from '../assets/analisededados/528b7877b11173c33c2882c59e581dd76c4f89e9.png'
import img3 from '../assets/analisededados/63a1191b2bc632541b322b8fd57ccac18042ff56.png'
import img4 from '../assets/analisededados/711e327a0ef7b868c319c4951fb73365cbc7a8f7 (1).png'
import img5 from '../assets/analisededados/896aeb08c7810599e7e868e261ee164e7160c47d.png'
import img6 from '../assets/analisededados/cd8bbc0f80cdad4ac4a2a7d8ea90b883e184fb8f.png'
import img7 from '../assets/analisededados/ec5e44f6a3b3824fce794ade48bf4dfb5c3f3204.png'

// ✅ Seta SEM FUNDO (SVG transparente)
function SetaIcon({ className = '' }) {
	return (
		<svg
			className={className}
			viewBox='0 0 64 64'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			aria-hidden='true'
		>
			{/* haste */}
			<path
				d='M6 32h44'
				stroke='currentColor'
				strokeWidth='6'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			{/* ponta */}
			<path
				d='M36 16l14 16-14 16'
				stroke='currentColor'
				strokeWidth='6'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function AnaliseDeDados() {
	return (
		<main>
		{/* HERO (mesmo para mobile e desktop) */}
<section className='w-full'>
  <div
    className='relative py-16 sm:py-20 lg:py-24 bg-cover bg-center overflow-hidden'
    style={{ backgroundImage: `url(${bgTop})` }}
  >
    {/* Overlay escuro */}
    <div className='absolute inset-0 bg-[#1e4a5c]/75' />

    {/* Conteúdo */}
    <div className='relative max-w-6xl mx-auto px-4 text-center text-white z-10'>
      <h1 className='font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight'>
        Análise de Dados
      </h1>

      <p className='text-base sm:text-lg lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium text-balance'>
        Visualize seus dados de maneira inteligente, transformando-os em informações estratégicas.
        Tenha seus analytics, modelos de previsão e saiba como as informações se correlacionam.
      </p>
    </div>
  </div>
</section>


			{/* O que é */}
			<section className='py-16'>
				<div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
					<div className='flex justify-center'>
						<img src={img6} alt='Ilustração Análise' className='w-[320px] md:w-[420px]' />
					</div>

					<div>
						<h2 className='text-[#2F83AC] font-bold text-2xl lg:text-3xl mb-4'>O que é Análise de Dados?</h2>
						<p className='text-[#676A6F] mb-4'>
							A análise de dados é um procedimento de averiguação, limpeza, transformação e modelagem de dados com o objetivo de encontrar informações úteis, apresentar conclusões e contribuir na tomada de decisões.
						</p>
						<p className='text-[#676A6F]'>
							Possui um grande volume de dados, mas não sabe por onde começar? Nosso serviço de Análise de Dados transforma planilhas e bancos de dados complexos em informações claras e compreensíveis, permitindo que você extraia o máximo valor do que já possui. Nós traduzimos números e textos em respostas visuais e objetivas para suas perguntas mais importantes.
						</p>
					</div>
				</div>
			</section>

{/* Nossa abordagem analítica */}
<section className='py-10 bg-[#235F77] text-white'>
	<div className='max-w-6xl mx-auto px-4'>
		<h3 className='text-center text-xl lg:text-2xl font-semibold mb-8'>Nossa abordagem analítica</h3>

		<div className='grid grid-cols-3 gap-3 md:gap-6'>
			<article className='bg-white text-[#235F77] p-3 md:p-6 shadow-md aspect-square flex flex-col justify-center'>
				<h4 className='font-bold text-xs md:text-lg mb-2 md:mb-3'>Organização e Limpeza de Dados</h4>
				<p className='text-[10px] md:text-sm'>Tratamos e estruturamos seus dados brutos, removendo inconsistências e preparando-os para uma análise precisa e confiável.</p>
			</article>

			<article className='bg-white text-[#235F77] p-3 md:p-6 shadow-md aspect-square flex flex-col justify-center'>
				<h4 className='font-bold text-xs md:text-lg mb-2 md:mb-3'>Extração de Medidas e Estatísticas</h4>
				<p className='text-[10px] md:text-sm'>Aplicamos técnicas estatísticas para resumir suas informações, identificando os números e as métricas mais relevantes para seus objetivos.</p>
			</article>

			<article className='bg-white text-[#235F77] p-3 md:p-6 shadow-md aspect-square flex flex-col justify-center'>
				<h4 className='font-bold text-xs md:text-lg mb-2 md:mb-3'>Visualização e Dashboards Intuitivos</h4>
				<p className='text-[10px] md:text-sm'>Criamos gráficos, tabelas e painéis que convertem dados complexos em tendências e padrões fáceis de identificar visualmente.</p>
			</article>
		</div>
	</div>
</section>
		{/* Beneficios para seu projeto */}
<section className="py-14">
  {/* faixa SOMENTE do título + subtexto (full-width) */}
  <div className="w-full bg-[#1A485B] py-12 mb-10">
    <div className="max-w-5xl mx-auto px-4">
      <h3 className="text-center text-white font-semibold">
        <span className="block text-2xl lg:text-3xl">
          Benefícios Para o Seu Projeto
        </span>

        <span className="block mt-2 text-base lg:text-lg font-normal opacity-90">
          Com a nossa análise de dados, você:
        </span>
      </h3>
    </div>
  </div>

  {/* cards (sem bg atrás) */}
  <div className="max-w-5xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <article className="bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square">
        <img src={img4} className="w-28 mb-5" alt="Atendimento" />
        <div>
          <h4 className="font-semibold text-[#235F77] text-base mb-2">
            Recebe um atendimento humano e personalizado no canal de comunicação que preferir;
          </h4>
        </div>
      </article>

      <article className="bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square">
        <img src={img7} className="w-28 mb-5" alt="Padrões" />
        <div>
          <h4 className="font-semibold text-[#235F77] text-base mb-2">
            Ganha a capacidade de identificar padrões, comparar resultados e detectar anomalias;
          </h4>
        </div>
      </article>

      <article className="bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square">
        <img src={img1} className="w-28 mb-5" alt="Processo" />
        <div>
          <h4 className="font-semibold text-[#235F77] text-base mb-2">
            Realiza esse processo de forma rápida, fundamentando suas provisões, conclusões e estratégias em evidências sólidas, mesmo sem
            conhecimento técnico avançado.
          </h4>
        </div>
      </article>

      <article className="bg-white border-4 border-[#2F83AC] p-8 flex flex-col items-center justify-center text-center aspect-square">
        <div className="flex items-center gap-3 mb-5">
          <img src={img5} className="w-20" alt="Preço" />
          <img src={img2} className="w-20" alt="Unicamp" />
        </div>
        <div>
          <h4 className="font-semibold text-[#235F77] text-base mb-2">
            Tudo isso com o padrão de qualidade Unicamp e com preços abaixo do mercado!
          </h4>
        </div>
      </article>
    </div>
  </div>
</section>

			{/* CTA */}
			<section className='py-3 bg-[#235F77] text-white'>
				<div className='max-w-6xl mx-auto px-4 text-center'>
					<p className='mb-6 text-lg'>
						Dê o próximo passo para entender seus dados. Fale com nossos especialistas e transforme suas informações em insights poderosos.
					</p>
					<div>

					</div>
					<div className='flex justify-center items-center gap-4 text-white'>


					</div>
					
				</div>
				
			</section>

			<section className='text-white flex justify-center items-center
			pt-10'>
				
						<a
							href='https://wa.me/551935216073'
							target='_blank'
							rel='noreferrer'
							className='bg-[#1A485B] px-8 py-3 font-semibold'
						>
							CONTATE-NOS
						</a>
			</section>
		</main>
	)
}

export default AnaliseDeDados
