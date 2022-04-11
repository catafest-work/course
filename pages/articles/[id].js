import {useRouter} from "next/router";
import Head from "next/head"; // to custom the title in the webpage

// dynamic webpage with title
const SingleArticle = ({title}) => {

    const router = useRouter();
    const id = router.query.id
    
    return (
        <> 
        <Head>
        <title>{title} | Dynamic </title>
        </Head>
            <h1>
                Single Article { id }
            </h1>
        </>
    )
}
export default SingleArticle;