import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Results from "../components/Results";
import TrendingHeading from "../components/TrendingHeading";
import TrendingPeople from "../components/TrendingPeople";

const trending = ({ trendings, trendingPeople }) => {
    return (
        <>
            <Head>
                <title>Trending Movies</title>
                <meta name="description" content="Hulu 2.0 app with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Hero trendings={trendings} />

            <TrendingHeading
                title="Trending Movies Of This Week"
                identifier="trending"
            />
            <Results results={trendings} />

            <TrendingHeading
                title="Trending Star Of This Week"
                identifier="stars"
            />

            <TrendingPeople star={trendingPeople[0]} peoples={trendingPeople} />

            <Footer />
        </>
    );
};

export default trending;

export const getServerSideProps = async () => {
    const trendingURL = `${process.env.BASE_URL}/trending/movie/week?api_key=${process.env.API_KEY}`;
    const trendingPeopleUrl = `${process.env.BASE_URL}/trending/person/week?api_key=${process.env.API_KEY}`;

    const res = await fetch(trendingURL);
    const data = await res.json();

    const peopleRes = await fetch(trendingPeopleUrl);
    const propleData = await peopleRes.json();

    return {
        props: {
            trendings: data.results,
            trendingPeople: propleData.results,
        },
    };
};
