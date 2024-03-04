export default function Idea({ data, onBack, onNewIdea, isLoading }) {
    function priceFormatter(price) {
        if (price == 0) return 'Free'
        const signs = Math.round(price * 10)
        return '$'.repeat(signs)
    }

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : data ? (
                <>
                    {!data.error && (
                        <>
                            <div className="card">
                                <span id="activity">{data.activity}</span>
                                <div className="others">
                                    <text>Price: {priceFormatter(data.price)} </text>
                                    <text>Participants: {data.participants}</text></div>
                            </div>
                            <div className="buttons">
                                <button onClick={onNewIdea}>Give a new idea</button>
                                <button onClick={onBack}>&lt; Go back</button>
                            </div>
                        </>
                    )}
                    {data.error && <div>
                        {data.error}
                        <div>
                        <button onClick={onBack}>&lt; Go back</button>
                        </div>
                    </div>}
                </>
            ) : (
                <p>Error occurred while fetching data.</p>
            )}
        </div>
    );
}
