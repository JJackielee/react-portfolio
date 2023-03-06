import './style.css';

const About = () => {
    //about page that imports an avater image in the same directory. card layout is from bootstrap
    return (
        <div className="background">
            <div className="container">
                <br></br>
                <h2 className="display-6 text-center">About Me</h2>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={require('./avatar.jpg')}  class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title" style={{color:'black'}}>Hi My name is Jackie!</h5>
                                <p class="card-text" style={{color:'black'}}>I am currently a University of Washington coding bootcamp student. I graduated with a BA degree from the university washington. I worked in the real estate industry for about two years and have an educational background in UX design! I am a life long learning and is trying to break into the tech industry with this course!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default About