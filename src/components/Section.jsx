import Card from "../assets/card.png"

const Section = () => {
    return (
        <>
        <section className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
        <h4 className="text-center text-5xl font-extrabold mb-8 text-primary">Carta do Dia</h4>
            <div className='border-2 border-pink rounded-xl rounded-t-[80px] md:p-9 px-4 py-9'>
                <div className="lg:grid grid-cols-2  items-start">
                    <img src={Card} alt="" className="h-[500px] mx-auto"/>

                    <div className="flex flex-col h-[500px]text-justify justify-start text-2xl gap-4 md:pt-4 md:pr-10">
                        <h3 className="text-2xl font-semibold text-center">A Morte</h3>
                        <p className="leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum officia eaque, officiis eveniet odit dicta illum, architecto accusantium fugiat mollitia optio reprehenderit. Vero repellat corrupti temporibus dolorem magnam.</p>
                        <p className="leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas, odio, quis aliquam sapiente quisquam ullam voluptatum maiores perspiciatis dignissimos dicta illum? Vitae deserunt, dolorem voluptatem ex nemo modi eligendi!</p>
                    </div>                   
                </div>
            </div>
        </section>
        </>
    )
}

export default Section
