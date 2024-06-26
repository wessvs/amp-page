import { GiEvilLove, GiLockedHeart } from "react-icons/gi";
import Card from "./Card";
import { TbEyeQuestion } from "react-icons/tb";


const Benefits = () => {
    // Utilizar cores já utilizadas na página
    const cards = [
        {'icon': <GiEvilLove  />, 'text': 'Saiba as intenções, os sentimentos e o futuro da sua vida amorosa, profissional, social, saúde ou algo que queira saber DA SUA VIDA.', 'bgColor':'secondary', 'iconColor': 'indigo-500'},
        {'icon': <GiLockedHeart  />, 'text': 'Consultas 100% sigilosas, realizadas por mensagem de texto (chat) ou email.', 'bgColor':'blue-500', 'iconColor': 'primary'},
        {'icon': <TbEyeQuestion />, 'text': 'Coloque um ponto final nas suas dúvidas, conquiste seus objetivos!', 'bgColor':'tertiary', 'iconColor': 'red-500'},
    ]
    
    return(
        <>
        <section className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
            <div className="text-center">
                <h4 className="text-5xl font-extrabold text-primary">Vida Tarot 
                </h4>
                <p className="text-secondary text-2xl font-semibold leading-10">Tarot online responsável, ético e confiável.</p>
            </div>
        
        {/* card area */}
            <div className="flex flex-col md:max-w-[70vw] mx-auto gap-4 my-8">
                {/* single card */}
                {/* <div className="flex flex-col border-blue-500 border-2 rounded-2xl bg-blue-500 bg-opacity-50 p-4 my-8 md:grid grid-cols-6 items-center gap-8 md:h-32">
                    <div className=" text-red-500 text-8xl mx-auto">
                        <GiEvilLove  />
                    </div>
                    <p className="mx-auto w-52 md:w-full leading-8 md:col-span-5 text-xl text-center font-normal">Saiba as intenções, os sentimentos e o futuro da sua vida amorosa, profissional, social, saúde ou algo que queira saber <span className="font-semibold">da sua vida.</span></p>
                </div> */}
                {cards.map(({id, icon, text, bgColor, iconColor }) =>{return (<Card key={id} text={text} bgColor={bgColor} icon={icon} iconColor={iconColor} />)})}
                
{/* <Card bg={bg} icon={ico} text={text }/> */}
            </div>
        </section>
</>
    )
}

export default Benefits