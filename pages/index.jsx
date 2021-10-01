import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home() {
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
            <Results />
        </div>
    );
}
