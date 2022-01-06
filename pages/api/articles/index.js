import { articles } from "../../../data";

export default function getArticles(req, res) {
    res.status(200).json(articles);
}