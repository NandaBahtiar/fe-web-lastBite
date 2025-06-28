import React from 'react'

const Footer = () => {
    return (
        <div id={"footer"} className={"p-10 w-full text-white bg-footerBackground flex justify-between items-center"}>
            <div className="text-2xl font-bold p-4">
                LastBite<span className="text-secondary">.</span>
            </div>
            <div className="text-1xl font-bold p-4">
                Link
            </div>
            <div className="text-1xl font-bold p-4">
                Contact
            </div>


        </div>
    )
}
export default Footer
