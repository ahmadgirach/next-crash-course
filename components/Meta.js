import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" href="./favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: "WebDev News",
    keywords: "Web developent, programming",
    description: "Get the latest news in tech."
};

export default Meta;
