//import {useRouter} from "next/router";
import Head from "next/head"; // to custom the title in the webpage

// dynamic webpage with title
const Article = ({article}) => {

    //const router = useRouter();
    //const id = router.query.id
    
    return (
        <> 
        <Head>
        <title>Course | Dynamic {article.title} </title>
        </Head>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </>
    )
}
export default Article;

export async function getStaticProps({params}) {
// access the URL with /posts/number
    const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await response.json(); // need to have await here 
    return {
        props: {article: data}
    }
}
export async function getStaticPaths() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        fallback : false, 
        paths: data.map(article => (
            {
                params: { id : article.id.toString() }
            }
        ))
    }
}