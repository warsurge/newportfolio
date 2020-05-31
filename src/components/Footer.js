import React from "react"
import "./footer.css"
import Resume from "../components/Serge Resume.pdf"


const Github=  "https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg"
const Adobe= "https://img.favpng.com/6/19/14/adobe-systems-logo-computer-software-pdf-computer-icons-png-favpng-Gg6Wj3cS6kET2LsBGvmBhGWM5.jpg"
const LinkedIn=  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
// const Resume = "src/components/Serge Resume.pdf"

function Footer(){

    return(
    <container>
        <div className="footer">
            <div className="thumbnail">
                <div className="row">

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="https://github.com/warsurge">
                            <img src={Github}
                                alt="Github logo" className="img-thumbnail" />
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="https://www.linkedin.com/in/sergio-bracamontes/">
                            <img src={LinkedIn}
                                alt="LinkedIn logo" className="img-thumbnail" />
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href= {Resume}>
                            <img src={Adobe}
                                alt="Adobe Logo" className="img-thumbnail" />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </container>
    )
}

export default Footer