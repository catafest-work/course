// Class Component or Function Component 
import Link from "next/link";

const Articles = () => {
    return (
        <>
        <Link href="/about">
        <a>About</a>
        </Link>
        <Link href="/articles">
        <a>Articles</a>
        </Link>
        <Link href="/services">
        <a>Services</a>
        </Link>
        <h1>Articles</h1>
        </>
    )
}
export default Articles;