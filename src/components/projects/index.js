const Project = ({title, image, imageAlt, gitHub, live}) => {

    return (
        <div class="col">
            <div class="card">
                <h3 class="card-header">{title}</h3>
                <img src="http://placekitten.com/200/300" class="card-img-top image" alt={imageAlt} />
                <div class="card-body">
                    <a href={gitHub} class="btn btn-primary m-2 ">Github Repo</a>
                    <a href={live} class="btn btn-primary m-2 ">Live Application</a>
                </div>
            </div>
        </div>
    )


}

export default Project