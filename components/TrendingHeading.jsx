const TrendingHeading = ({ title, identifier }) => {
    return (
        <h1 id={identifier} className="text-center text-6xl font-mono mt-5">
            {title}
        </h1>
    );
};

export default TrendingHeading;
