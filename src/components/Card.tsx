import React from "react"

const Card = ({bgColor, icon, text, iconColor}) => {
    return (
        <div className={`flex flex-col w- border-${bgColor} border-2 rounded-2xl bg-${bgColor} bg-opacity-50 p-4 md:grid grid-cols-6 items-center gap-8 md:h-32`}>
            <div className={`text-${iconColor} text-8xl mx-auto`}>
                { icon }
            </div>
            <p className="mx-auto w-5 md:w-full leading-8 md:col-span-5 text-xl text-center font-normal">{text}</p>
        </div>
    )
}

export default Card