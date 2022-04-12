const Article = ({article}) => {
    return (
        <div>
            <h1 className="text-sm">{article.title}</h1>
            <p className="text-gray-400">{article.body}</p>
        </div>
    ) // send a prop
}
export default Article;
