// import { useRouter } from "next/router";

import Link from "next/link";
import Meta from "../../../components/Meta";
import { baseUrl } from "../../../environment";

const article = ({ article }) => {
    // const router = useRouter();
    // const query = router.query;

    return (
        <>
            <Meta title={article.title} description={article?.excerpt} />
            <h1>{article?.title}</h1>
            <p>{article?.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    );
};

export default article;


// export const getServerSideProps = async (context) => {
//     /**
//      * Following works like a filter, it'll return the list of one object.
//      * const endpoint = `https://jsonplaceholder.typicode.com/posts?id=${context.params.id}`;
//      */
//     const endpoint = `https://jsonplaceholder.typicode.com/posts/${context.params.id}`;
//     const res = await fetch(endpoint);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     };
// };


export const getStaticProps = async (context) => {
    // const endpoint = `https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`;
    const endpoint = `${baseUrl}/api/articles/${context?.params?.id}`;
    const res = await fetch(endpoint);
    const article = await res.json();

    return {
        props: {
            article
        }
    };
};


export const getStaticPaths = async (context) => {
    // const endpoint = `https://jsonplaceholder.typicode.com/posts`;
    const endpoint = `${baseUrl}/api/articles`;
    const res = await fetch(endpoint);
    const articles = await res.json();
    const ids = articles.map(({ id }) => id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false
    };
};
