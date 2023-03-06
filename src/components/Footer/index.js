import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs'
import "./style.css"
const Footer = () => {


    return (
        <div class="container footerBg">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-1 my-2 ">
                <div class="col-md-4 d-flex align-items-center">
                    <span class="mb-3 mb-md-0"> Jackie Lee Portfolio 2023</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a  href="https://github.com/JJackielee"><BsGithub size={20} color={'#ffc857'}/></a></li>
                    <li class="ms-3"><a  href="https://www.linkedin.com/in/jjackielee/"><BsLinkedin size={20} color={'#ffc857'}/></a></li>
                    <li class="ms-3"><a  href="https://stackoverflow.com/users/7655780/jackiexy"><BsStackOverflow size={20} color={'#ffc857'}/></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer