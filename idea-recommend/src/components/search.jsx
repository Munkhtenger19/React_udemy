export default function Search({partiNum, onPartiNumChange}) {
    const handleClick = (e) => {
        e.preventDefault();
        onPartiNumChange(e.target.participantsNum.value)    
    }
    

    return (
        <>
            <h2> What to do today?</h2>        
            <form onSubmit={handleClick}>
                <div>
                    <label> Participants: </label> 
                    <input name="participantsNum" type="number" min="1"/>
                </div>
                <button id='search' type="submit">Search</button>
            </form> 
        </>
    );
}