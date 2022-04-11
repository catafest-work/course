// Class Component or Function Component 
import Link from "next/link";
//import styles from "../styles/Index.module.css";

import Head from "next/head"; // to custom the title in the webpage
import Image from "next/image";
const Home = () => {
    return(
        <> 
        <Head>
            <meta name="description" content="default"/>
            <title>Course | Home</title>
        </Head>
        <section className="p-1 space-y-2">
        <h1 className="font-bond text-blue-500">Home page with tailwind</h1>
        <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <a href="#">Google link</a>
        <hr></hr>
        <Image src="/catafest.jpg" 
        alt="nicknames: catafest , mythcat "
        width="50%"
        height="50%"
        quality="100"
        />
        </section>
        </>
    )
}
export default Home;