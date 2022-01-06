import ArticleList from "../components/ArticleList";
import { baseUrl } from '../environment';

export default function Home({ articles }) {
	return (
		<div>
			<ArticleList articles={articles} />
		</div>
	);
}

export const getStaticProps = async () => {
	const endpoint = `${baseUrl}/api/articles`;
	const res = await fetch(endpoint);
	const articles = await res.json();

	return {
		props: {
			articles
		}
	};
};

// export const getStaticProps = async () => {
// 	const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=6";
// 	const res = await fetch(endpoint);
// 	const articles = await res.json();

// 	return {
// 		props: {
// 			articles
// 		}
// 	};
// };
