import Footer from "../components/footer";
import Header from "../components/header";
import ProjectCard from "../components/projectCard";
import pic1 from "../images/Adsız tasarım (15).png"
import pic2 from "../images/blog.png"
import pic3 from "../images/chatapp.png"

const Projects = () => {
    return (
        <>
        <Header/>
            <main className="container d-flex flex-column align-items-center">
                <h2 style={{borderBottom:"2px solid black",width:"100%",textAlign:"center",padding:"2rem"}}>MY RECENT PROJECTS</h2>
                <ProjectCard image={pic3} title={"Chat App"} description={"Simple real time web, personal chat room application built with Node.Js , Socket.io. Features : create a private room and communicate from there, share location"}/>
                <ProjectCard image={pic2} title={"Lilapoint"} description={"My blog-style website, which I developed primarily to improve writing and research skills for myself and those around me. Tech I used while developing this website is Html, Css, Bootstrap, Jquery, Node.js, MongoDB and some libraries.I will upload the project codes to github soon."}/>
                <ProjectCard image={pic1} title={"My other Open-Source Projects"} description={"You can find task-manager app, notes-app, data structures , my programming assignments given at the university, and the open source codes of this portfolio on my github. Languages ​​and technologies I use: Python, Java, Javascript, C# ; Node.js, React.js, Html, Css, Bootstrap , Express , MongoDB etc."}/>
            </main>
            <Footer/>
        </>
    )
}
export default Projects;