import Morte from "../assets/card.png"

const TarotCards = [
    {
        'nome': 'A Morte',
        'img': {Morte},
        'texto': [
            ' A Morte: renovação, anúncio, rompimento, quebra de valores enraizados, passagem, encerramento de ciclo transformador, morte. Nada mais importa a partir daqui, outras experiências; E se tudo que aprendeu até agora for uma mentira?!', 
        ]
    },
]

const Section = () => {
    return (
        <>
        <section className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
        <h4 className="text-center text-5xl font-extrabold mb-8 text-primary">Carta do Dia</h4>
            <div className='border-2 border-pink rounded-xl rounded-t-[80px] md:p-9 px-4 py-9'>
                <div className="lg:grid grid-cols-2  items-start">
                    <img src={TarotCards[0].img.Morte} alt="" className="h-[500px] my-auto mx-auto"/>

                    <div className="flex flex-col h-[500px]text-justify justify-start text-2xl gap-4 md:pt-4 md:pr-10">
                        <h3 className="text-2xl font-semibold text-center">{TarotCards[0].nome}</h3>
                        <div className="mb-2">{TarotCards[0].texto.map((par) => <p key={par.id} className="leading-10">{par}</p>)}</div>
                    </div>                   
                </div>
            </div>
        </section>
        </>
    )
}

export default Section
