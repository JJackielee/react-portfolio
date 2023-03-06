import './style.css'
import Project from "../../components/projects"
const Portfolio = () => {

    const projects = [{
        title:"Tech-Blog",
        image:"/project1.png",
        imageAlt:"home page of tech blog",
        gitHub:"https://github.com/JJackielee/tech-blog",
        live:"https://jackiestechblog.herokuapp.com/"
    },
    {
        title:"Rent-a-Truck",
        image:"/project1.png",
        imageAlt:"home page of Rent-a-Truck",
        gitHub:"https://github.com/SprocketCreations/truck-rental",
        live:"https://rent-a-truck.herokuapp.com/"
    },
    {
        title:"Pokemon Deck Gen",
        image:"/project1.png",
        imageAlt:"home page of Pokemon Deck Gen",
        gitHub:"https://github.com/JJackielee/pokemon-deck-generator",
        live:"https://jjackielee.github.io/pokemon-deck-generator/"
    },
    {
        title:"Note Taker",
        image:"/project1.png",
        imageAlt:"home page of Note Taker",
        gitHub:"https://github.com/JJackielee/note-taker",
        live:"https://jackiesnotestaking.herokuapp.com/"
    },
    {
        title:"Weather Forecast",
        image:"/project1.png",
        imageAlt:"home page of Weather Forecast",
        gitHub:"https://github.com/JJackielee/weather-forecast",
        live:"https://jjackielee.github.io/weather-forecast/"
    },
    {
        title:"Day Planner",
        image:"/project1.png",
        imageAlt:"home page of Day Planner",
        gitHub:"https://github.com/JJackielee/day-planner",
        live:"https://jjackielee.github.io/day-planner/"
    }]


    return (
        <div class="background">
            <div class="container">
                <br>
                </br>
                <h2 className="display-6 text-center">Projects</h2>
                <br></br>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {projects.map(work=><Project title={work.title} image={work.image} imageAlt={work.imageAlt} gitHub={work.gitHub} live={work.live}/>)}

                </div>
            </div>
            <br>
            </br>
        </div>



    )

}

export default Portfolio