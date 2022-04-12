// Class Component or Function Component 
import Link from "next/link"; 
import Article from "../../components/Article";

// need to fix next/babel implementation for : error - ESLint: Failed to load config "next/babel" to extend from. Referenced from ... .eslintrc.json !~

const Articles = ({articles}) => {
    return (
        <>
        <h1>Article</h1>
        {
            articles.map( (article) => 
            {
                <div className="space-y-2">
                    <Article article = { article } /> 
                </div>
            })
        }
        </>
    );
    /*return (
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
    )*/
}
export default Articles;

export async function getStaticProps() // get some articles from URL
{
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json(); // need to have await here 
    return {
        props: 
        {
            articles: data
        }
    }
} // this can be done only on pages folder not in  all folders, because static props only runs on the server side 

/*
public function index() {
    $posts = Post::all()
    return view('index', compact('posts'))
}
*/