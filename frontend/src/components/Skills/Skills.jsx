import './skills.css'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaSass, FaSquareGit, FaSquareGithub, FaSquareJs } from "react-icons/fa6";


function Skills() {
    return (
        <div className='container-fluid'>
            <h1 className='text-center my-5'>Skills</h1>
            <ul className='d-flex gap-5 justify-content-around flex-wrap my-5'>
                <li><FaHtml5 className='icons' id='html' /></li>
                <li><FaCss3Alt className='icons' id='css' /></li>
                <li><FaSass className='icons' id='sass' /></li>
                <li ><FaNodeJs className='icons' id='node' /></li>
                <li ><FaSquareJs className='icons rounded rounded-3' id='js' /></li>
                <li ><FaSquareGit className='icons' id='git' /></li>
                <li><FaSquareGithub className='icons' id='git-hub' /></li>
            </ul>
        </div>
    );
}

export default Skills;