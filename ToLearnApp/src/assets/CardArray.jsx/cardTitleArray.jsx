import styles from "./cardTitleArray.module.css"

export default function CardTitleArray( {listTitle, inputArray})
{

    return(
        <div className={styles.list}> 
            <h4>{listTitle}</h4>
        <div >
             {inputArray.map((card) => (
                    <div key={card.id}>
                        <h4 className={styles.listElementTitle}>{card.title}</h4>
                        </div>
                    ))}
        </div>
        </div>
    );
}