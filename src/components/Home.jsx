import React from 'react'
import tarotCard from '../assets/icon-banner.png'

const Home = () => {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20'>
            <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-9'>
                    <div className='text-center text-gray-50 text-[.5rem]'>
                        <img src={tarotCard} alt="" className='lg:h-[400px] rounded-xl my-5 mr-8' />
                        <figcaption>Designed by www.freepik.com</figcaption>
                    </div>
                    <div className='md:w-3/5'>
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>Leitura de Tarot Online</h2>
                        <p className='text-[#EBEBEB] text-2xl mb-8 leading-7 font-medium'>Use as cartas de tarô para ajudar nas situações e dúvidas de seu dia a dia: amor, amizades, trabalho, dinheiro. O que será que os <span className='text-primary font-black '>"O diabo"</span>, <span className='text-primary font-black'>"O eremita"</span> e <span className='text-primary font-black'>"A temperança"</span> tem a dizer hoje?</p>
                        <a target='_blank' href="https://wa.me/5511982007294"><button className='text-white border-2 border-solid border-transparent hover:border-primary hover:text-white transition-all duration-300 py-3 px-4 font-bold rounded-2xl bg-[#E396E6] hover:bg-transparent shadow-xl'>Agende sua consulta</button></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home