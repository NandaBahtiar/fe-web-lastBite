import React from 'react';
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
            <div className={" relativebg-amber-950 min-h-screen w-full flex flex-col"}>
                <NavBar/>
                <Jumbotron/>
                <ScrollVelocity
                    id={"scrollVelocity"}
                    className={"text-sm "}
                    velocity={10}
                    numCopies={300}
                    texts={['Save Food Last Bite']}
                />
            </div>
            <Step/>
            <Why/>
            <Register/>
            <Impact/>
            <UserRespon/>
            <DownloadApp/>
            <Footer/>

        </>
    );
};

export default HomePage;
