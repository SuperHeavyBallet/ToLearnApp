export default function CardTitleArray( {inputArray})
{

    return(
        <div>
             {inputArray.map((card) => (
                    <div key={card.id}>
                        <h4>{card.title}</h4>
                        </div>
                    ))}
        </div>
    );
}