// Class Component or Function Component 
import Link from "next/link"; 
import Article from "../../components/Article";
import Head from "next/head";

// need to fix next/babel implementation for : error - ESLint: Failed to load config "next/babel" to extend from. Referenced from ... .eslintrc.json !~
const Articles = ({articles}) => {
    //console.log('Articles ...',{articles})
    return (
        <>
        <Head>
        <title>Course | Article</title>
        </Head>
        <h1>Articles {process.env.NEXT_PUBLIC_DATABASE}</h1>
        {articles.map((article) => {
            return (
                <div className="space-y-2" key={article.id}><Article article={article} /> 
                </div>
            )
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

/*
//export async function getServerSideProps() // get some articles from URL
export async function getStaticProps() // get some articles from URL , low cost because is cached 
{
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await response.json(); // need to have await here 
    // need to check what is wrong with show articles on webpage
    return {
        props: 
        {
            articles
        }// , revalidate: 1
    }
} // this can be done only on pages folder not in  all folders, because static props only runs on the server side 
*/
/*
public function index() {
    $posts = Post::all()
    return view('index', compact('posts'))
}
*/


export async function getServerSideProps() {
    const database = process.env.DB_DATABASE;
    console.log(`The name of the database => ${database}`);
    
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await response.json(); // need to have await here 
    
    return {
        props: 
        {
            articles
        }
    }
}