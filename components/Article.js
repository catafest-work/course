import Link from 'next/link';
const Article = ({article}) => {
    return (
        <div>
        <Link href={`articles/${article.id}`}>
        <a>
            <h1 className="text-sm">{article.title}</h1>
            <p className="text-gray-400">{article.body}</p>
        </a>
        </Link>
        </div>
    )
}

export default Article;
