const Project = ({title, image, imageAlt, gitHub, live}) => {
    // project component that takes in an object to provide the quire information. 
    //imports an image from the img folder thats in the same directory as this component
    return (
        <div class="col">
            <div class="card">
                <h3 class="card-header">{title}</h3>
                <img src={require('./img/'+ image +'.png') || '#'} class="card-img-top image" alt={imageAlt} />
                <div class="card-body">
                    <a href={gitHub} class="btn btn-primary m-2 ">Github Repo</a>
                    <a href={live} class="btn btn-primary m-2 ">Live Application</a>
                </div>
            </div>
        </div>
    )


}

export default Project