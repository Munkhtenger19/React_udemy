export default function Log({gameInfos}){
    return (
    <ol id="log">
        {gameInfos.map(item=> (<li key={`${item.row}${item.col}`}> {item.row}, {item.col}, {item.player} </li>))}
    </ol>
    );
}