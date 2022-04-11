import Link from "next/link"
const Nav = (props) => {
    return (
        <>
        <style jsx>{`
            a {
                font-size: 0.85rem;
                color: #1e7aaf;
                padding: 0.5rem;
            } 
        `}</style>
        <style jsx>{`
            nav {
                background-color: ${props.type === "main" ? "#333" : "#32CD32S"}; // this not work because jumps on video tutorial , css is not clear source code 
            }  

        `}</style>
        <nav>        
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/articles"><a>Articles</a></Link>
        <Link href="/services"><a>Services</a></Link>
        
        </nav>
        </>
    )
}
export default Nav;