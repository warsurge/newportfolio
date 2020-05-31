import React from "react"


import SoundThis from "../components/sound.jpg";
import Fitness from "../components/fitness.png";
import BingeWorthy from "../components/binge.png";
import Weather from "../components/weather.jpg";
import Workday from "../components/workday.jpg";

function Portfolio () {

    return(
        <div className="center">
            <div className="card bg-light mb-3" style={{maxWidth: "75%"}}>
                <div className="card-header center">
                    <h2>PORTFOLIO</h2>
                </div>
                <div className="card-body">



                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-12">
                        <div className="col mb-4">
                            <div className="card">
                                <img src={SoundThis} className="card-img-top" alt="SoundThis screenshot" />
                                <div className="card-body">
                                    <h4 className="card-title">SoundThis!</h4>
                                    <p className="card-text">App for music lovers. Will let you see your favorite artists
                                        and discover new artists and when they are touring!</p>
                                    <a href="https://github.com/Brian-Fairbanks/SoundThis.git">Github Repository</a>
                                    <br />
                                    <a href="https://brian-fairbanks.github.io/SoundThis/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={Weather} className="card-img-top" alt="Weather Me This screenshot"/>
                                <div className="card-body">
                                    <h4 className="card-title">Weather Me This!</h4>
                                    <p className="card-text">App to tell what the weather will be. Will give you the weather
                                        in any area and give you a five day forecast.</p>
                                    <a href="https://github.com/warsurge/homework-6.git">Github Repository</a> <br />
                                    <a href=" https://warsurge.github.io/homework-6/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={Workday} className="card-img-top" alt="Work day Screen screenshot" />
                                <div className="card-body">
                                    <h4 className="card-title">Work Day Planner</h4>
                                    <p className="card-text">An app that will help you plan your day with interacitve time
                                        blocks.</p>
                                    <a href="https://github.com/warsurge/homework-5.git">Github Repository</a> <br />
                                    <a href="https://warsurge.github.io/homework-5/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={BingeWorthy} className="card-img-top" alt="BingeWorthy Screen screenshot" />
                                <div className="card-body">
                                    <h4 className="card-title">BingeWorthy</h4>
                                    <p className="card-text">An app that will help you get through being locked up by showing the top shows of the major streaming services.</p>
                                    <a href="https://github.com/mmejares/project2_BingeWorthy.git">Github Repository</a> <br />
                                    <a href="https://production-binge-worthy.herokuapp.com/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={Fitness} className="card-img-top" alt="Fitness Tracker Screen screenshot" />
                                <div className="card-body">
                                    <h4 className="card-title">Fitness Tracker</h4>
                                    <p className="card-text">An app that you can use to help keep track of your workouts and see your progress!</p>
                                    <a href="https://github.com/warsurge/homework-14.git">Github Repository</a> <br />
                                    <a href="https://fitness-tracker15.herokuapp.com/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio