import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Results from "../components/Results";

const trending = ({ trendings }) => {
    console.log(trendings);

    return (
        <>
            <Head>
                <title>Trending 24H</title>
                <meta name="description" content="Hulu 2.0 app with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Hero trending={trendings[0]} />

            <h1 className="text-center text-6xl font-mono mt-5">
                Trending Movies Of This Week
            </h1>

            <Results results={trendings} />

            <Footer />
        </>
    );
};

export default trending;

export const getServerSideProps = async () => {
    const trendingURL = `${process.env.BASE_URL}/trending/all/week?api_key=${process.env.API_KEY}`;

    const res = await fetch(trendingURL);

    const data = await res.json();

    return {
        props: {
            trendings: data.results,
        },
    };
};
