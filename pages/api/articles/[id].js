import { articles } from "../../../data";

export default function getArticle(req, res) {
    const articleId = req.query?.id;
    const requiredArticle = articles.filter(({ id }) => id === articleId);

    if (requiredArticle?.length > 0) {
        res.status(200).json(requiredArticle[0]);
    } else {
        res.status(404).json({
            message: `Article with id ${articleId} was not found.`
        });
    }

    res.status(200).json(articles);
}