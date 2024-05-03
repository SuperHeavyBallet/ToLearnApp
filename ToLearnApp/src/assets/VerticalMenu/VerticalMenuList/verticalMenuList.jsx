import styles from "./verticalMenuList.module.css"

export default function VerticalMenuList( { listTitle, listArray } )
{
    return(
        <div>
            <h3>{listTitle}</h3>
            <div>
                {listArray.map((card, index) => (
                    <h3
                        key={index}
                    >{card.title}</h3>
                ))}
            </div>
        </div>
    )
}