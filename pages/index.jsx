import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
    return (
        <div>
            <Head>
                <title>Hulu 2.0</title>
                <meta name="description" content="Hulu 2.0 app with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            {/* Navbar */}
            <Nav />

            {/* Results */}
            <Results results={results} />
        </div>
    );
}

export const getServerSideProps = async context => {
    const genre = context?.query?.genre;
    const request = await fetch(
        `https://api.themoviedb.org/3${
            requests[genre]?.url || requests.Trending.url
        }`
    );
    const data = await request.json();

    return {
        props: {
            results: data?.results || null,
        },
    };
};
