import React from 'react'

const Step = () => {
    return (
        <section className={"w-full bg-white py-20 flex flex-col items-center justify-center   px-4"}>
            <h1 className={"font-bold text-4xl   text-center"}>Just 3 Easy Steps</h1>
            <p className="mt-2 text-lg   text-center" style={{maxWidth: '500px'}}>Save delicious food
                quickly and conveniently.</p>
            <div className={"flex flex-col md:flex-row gap-8 mt-12 max-w-5xl w-full"}>
                {/* Step 1 */}
                <div
                    className={"flex-1 bg-white/5 p-8 rounded-xl text-center flex flex-col items-center shadow-lg hover:shadow-secondary/20 transition-shadow duration-300"}>
                    <div className="text-4xl font-bold text-secondary mb-4">1</div>
                    <h3 className="text-2xl font-semibold   mb-3">Find Food</h3>
                    <p className=" ">Browse surplus food from your favorite local stores and
                        restaurants.</p>
                </div>
                {/* Step 2 */}
                <div
                    className={"flex-1 bg-white/5 p-8 rounded-xl text-center flex flex-col items-center shadow-lg hover:shadow-secondary/20 transition-shadow duration-300"}>
                    <div className="text-4xl font-bold text-secondary mb-4">2</div>
                    <h3 className="text-2xl font-semibold  -3">Rescue It</h3>
                    <p className=" ">Purchase at a great price through our secure app.</p>
                </div>
                {/* Step 3 */}
                <div
                    className={"flex-1 bg-white/5 p-8 rounded-xl text-center flex flex-col items-center shadow-lg hover:shadow-secondary/20 transition-shadow duration-300"}>
                    <div className="text-4xl font-bold text-secondary mb-4">3</div>
                    <h3 className="text-2xl font-semibold   mb-3">Enjoy</h3>
                    <p className=" ">Pick up your food, enjoy your meal, and help reduce food waste.</p>
                </div>
            </div>
        </section>
    )
}
export default Step
