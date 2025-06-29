import React from "react";
import {NavBar} from "../../components/NavBar";
import {Jumbotron} from "../../components/Hero";
import Footer from "../../components/Footer/Footer.jsx";
import ScrollVelocity from "../../components/Library/ScrollVelocity/ScrollVelocity.jsx";
import Step from "../../components/Step/Step.jsx";
import Register from "../../components/Register/Register.jsx";
import Impact from "../../components/Impact/Impact.jsx";
import UserRespon from "../../components/UserRespon/UserRespon.jsx";
import DownloadApp from "../../components/DownloadApp/DownloadApp.jsx";
import {Why} from "../../components/Why";

const HomePage = () => {
    return (
        <>
            <header className="min-h-screen w-full flex flex-col">
                <NavBar/>
                <Jumbotron id="hero"/>
                <ScrollVelocity
                    id={"scrollVelocity"}
                    className={"text-sm"}
                    velocity={10}
                    numCopies={300}
                    texts={["Save Food Last Bite"]}
                />
            </header>
            <main className=" ">
                <div className=" " id="HowItWorks">
                    <Step/>
                </div>
                <div className=" " id="why">
                    <Why/>
                </div>
                <div className=" " id="">
                    <Register/>
                </div>
                <div className=" " id="impact">
                    <Impact/>
                </div>
                <div className=" " id="user-response">
                    <UserRespon/>
                </div>
            </main>
            <DownloadApp id="download-app"/>
            <Footer/>
        </>
    );
};

export default HomePage;
