import './style.css'
import resume from './Resume.pdf'

const Resume = () => {

    return (
        <div className="background">
            <div className="container">
                <br>
                </br>
                <h2 className="display-6 text-center">Resume</h2>
                
                <div className="centerThis">
                    <br></br>
                    <a href={resume} target='_blank' download="resume" class="btn btn-primary">Download</a>
                    <br></br>
                    <br></br>
                </div>
                
                <h2 className="display-6 text-center">Proficiency</h2>
                <h3>Languages</h3>
                <div class="row mb-3 text-center">
                    <div class="col-4 themed-grid-col">HTML</div>
                    <div class="col-4 themed-grid-col">CSS</div>
                    <div class="col-4 themed-grid-col">Javascript</div>
                </div>
                <h3>Packages</h3>
                <div class="row mb-3 text-center">
                    <div class="col-4 themed-grid-col">REACT</div>
                    <div class="col-4 themed-grid-col">NodeJS</div>
                    <div class="col-4 themed-grid-col">Express</div>
                </div>
                <h3>Database</h3>
                <div class="row mb-3 text-center">
                    <div class="col-4 themed-grid-col">MongoDB</div>
                    <div class="col-4 themed-grid-col">Mysql</div>
                    <div class="col-4 themed-grid-col">Express</div>
                </div>
            </div>
        </div>
    )


}

export default Resume