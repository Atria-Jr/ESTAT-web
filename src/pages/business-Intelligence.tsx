import bgTop from '../assets/BusinessIntelligence/hero-fundo.png'

import img1 from '../assets/analisededados/442bec9c38a6a711d39854648c23adcb34aa1964.png'
import img2 from '../assets/analisededados/528b7877b11173c33c2882c59e581dd76c4f89e9.png'
import img3 from '../assets/BusinessIntelligence/analise.png'
import img4 from '../assets/analisededados/711e327a0ef7b868c319c4951fb73365cbc7a8f7 (1).png'
import img5 from '../assets/analisededados/896aeb08c7810599e7e868e261ee164e7160c47d.png'
import img6 from '../assets/analisededados/cd8bbc0f80cdad4ac4a2a7d8ea90b883e184fb8f.png'
import img7 from '../assets/analisededados/ec5e44f6a3b3824fce794ade48bf4dfb5c3f3204.png'

function SetaIcon({ className = '' }) {
	return (
		<svg className={className} viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' fill='none' aria-hidden='true'>
			<path d='M6 32h44' stroke='currentColor' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round' />
			<path d='M36 16l14 16-14 16' stroke='currentColor' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
}

function BusinessIntelligence() {
	return (
		<main>
			
			<section className='relative py-10 bg-cover bg-center overflow-hidden' style={{ backgroundImage: `url(${bgTop})` }}>
				<div className='absolute inset-0 bg-black/55' />

				<div className='relative max-w-6xl mx-auto px-4 text-center text-white'>
					<h1 className='font-extrabold text-3xl lg:text-5xl mb-3'>Business Intelligence</h1>
					<p className='text-sm lg:text-lg text-white/90 max-w-3xl mx-auto'>
						Seus dados contêm as respostas para o crescimento do seu negócio, mas encontrá-las pode ser um desafio. Nosso serviço de Business Intelligence (BI) conecta, organiza e transforma seus números brutos em painéis visuais e relatórios claros, permitindo que você pare de supor e comece a agir com base em fatos.
					</p>
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

			{/* Nossas entregas */}
			<section className='py-10 bg-white'>
				<div className='max-w-6xl mx-auto px-4'>
					<h3 className='text-center text-xl lg:text-2xl font-semibold text-[#2F83AC] mb-8'>Nossas Entregas para Potencializar seu Negócio</h3>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<article className='bg-white border-4 border-[#2F83AC] p-6 shadow-md'>
							<h4 className='font-bold text-lg mb-3 text-[#2F83AC]'>Dashboards Interativos</h4>
							<p className='text-sm text-[#235F77]'>
								Criamos painéis que centralizam suas métricas mais importantes em tempo real, permitindo uma análise intuitiva e secundada com apenas alguns cliques.
							</p>
						</article>

						<article className='bg-white border-4 border-[#2F83AC] p-6 shadow-md'>
							<h4 className='font-bold text-lg mb-3 text-[#2F83AC]'>Análise de Tendências e Padrões</h4>
							<p className='text-sm text-[#235F77]'>
								Analise o comportamento dos seus dados ao longo do tempo, permitindo que você entenda a sazonalidade, antecipe cenários e planeje o futuro com mais segurança.
							</p>
						</article>

						<article className='bg-white border-4 border-[#2F83AC] p-6 shadow-md'>
							<h4 className='font-bold text-lg mb-3 text-[#2F83AC]'>Segmentação de Clientes e Produtos</h4>
							<p className='text-sm text-[#235F77]'>
								Agrupamos seus dados para revelar quem são seus clientes mais valiosos, quais produtos têm melhor desempenho e onde estão suas maiores oportunidades de mercado.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Imagem "mão com gráficos" */}
			<section className='py-12'>
				<div className='max-w-6xl mx-auto px-4 flex justify-center'>
					<img src={img3} alt='BI - visualização de dados' className='w-full max-w-xl' />
				</div>
			</section>

			{/* Benefício direto */}
			<section className='py-12 bg-[#235F77] text-white'>
				<div className='max-w-6xl mx-auto px-4'>
					<h3 className='text-xl lg:text-2xl font-semibold mb-6 text-center'>O Benefício Direto para Seu Negócio</h3>
					<p className='text-white/90 mb-4 text-center max-w-4xl mx-auto'>
						Com uma solução de BI, sua gestão ganha <strong>clareza e controle</strong> para tomar decisões mais <strong>rápidas e inteligentes</strong>. O resultado é a capacidade de reduzir custos, aumentar a eficiência e alinhar toda a empresa em torno de metas e resultados mensuráveis.
					</p>
					<p className='text-white/90 text-center max-w-4xl mx-auto'>
						Tome o controle das suas decisões. Fale com nossos especialistas e transforme os dados da sua empresa em uma vantagem competitiva.
					</p>
				</div>
			</section>

			{/* Diferenciais (4 cards como no layout que você mandou) */}
			<section className='py-14'>
				<div className='max-w-6xl mx-auto px-4'>
					<h3 className='text-center text-xl lg:text-2xl font-semibold text-[#235F77] mb-10'>Nossos Diferenciais</h3>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<article className='bg-white border-4 border-[#2F83AC] p-6 flex flex-col items-center text-center'>
							<img src={img4} className='w-24 mb-4' alt='Atendimento' />
							<div>
								<h4 className='font-semibold text-[#235F77] mb-2'>Recebe um atendimento humano e personalizado no canal de comunicação que preferir;</h4>
							</div>
						</article>

						<article className='bg-white border-4 border-[#2F83AC] p-6 flex flex-col items-center text-center'>
							<img src={img7} className='w-24 mb-4' alt='Padrões' />
							<div>
								<h4 className='font-semibold text-[#235F77] mb-2'>Ganha a capacidade de identificar padrões, comparar resultados e detectar anomalias;</h4>
							</div>
						</article>

						<article className='bg-white border-4 border-[#2F83AC] p-6 flex flex-col items-center text-center'>
							<img src={img1} className='w-24 mb-4' alt='Processo' />
							<div>
								<h4 className='font-semibold text-[#235F77] mb-2'>Realiza esse processo de forma rápida, fundamentando suas provisões, conclusões e estratégias em evidências sólidas, mesmo sem conhecimento técnico avançado.</h4>
							</div>
						</article>

						<article className='bg-white border-4 border-[#2F83AC] p-6 flex flex-col items-center text-center'>
							<div className='flex items-center gap-3 mb-4'>
								<img src={img5} className='w-16' alt='Preço' />
								<img src={img2} className='w-16' alt='Unicamp' />
							</div>
							<div>
								<h4 className='font-semibold text-[#235F77] mb-2'>Tudo isso com o padrão de qualidade Unicamp e com preços abaixo do mercado!</h4>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* CTA (igual ao seu modelo) */}
			<section className='py-10 bg-[#235F77] text-white'>
				<div className='max-w-6xl mx-auto px-4 text-center'>
					<p className='mb-6 text-lg'>
						Não baseie suas decisões no acaso. Fale com nossos especialistas e valide seus resultados com rigor científico.
					</p>

					<div className='flex justify-center items-center gap-4 text-white'>
						<SetaIcon className='hidden lg:block w-20 h-20' />

						<a
							href='https://wa.me/551935216073'
							target='_blank'
							rel='noreferrer'
							className='bg-[#1A485B] px-8 py-3 font-semibold'
						>
							CONTATE-NOS
						</a>

						<SetaIcon className='hidden lg:block w-20 h-20 transform scale-x-[-1]' />
					</div>
				</div>
			</section>
		</main>
	)
}

export default BusinessIntelligence