import Link from "next/link"
const Nav = () => {
    return (
        <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/articles"><a>Articles</a></Link>
        <Link href="/services"><a>Services</a></Link>
        </nav>
    )
}
export default Nav;