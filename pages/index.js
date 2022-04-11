// Class Component or Function Component 
import Link from "next/link";
//import styles from "../styles/Index.module.css";

const Home = () => {
    return(
        <>       
        <section class="p-1 space-y-2">
        <h1 className="font-bond text-blue-500">Home page with tailwind</h1>
        <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <a href="#">Google link</a>
        </section>
        </>
    )
}
export default Home;