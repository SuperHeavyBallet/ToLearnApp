import styles from "./verticalList.module.css"

export default function VerticalList({listTitle, inputArray})
{
    return(
        <div className={styles.verticalList}>
            <div className={styles.title}>
            <h3>
            {listTitle}
            </h3>
            </div>
            <div>
                {inputArray.map((element, index) => (

                    <h3
                    key={index}>
                    
                        {element.title}
                    </h3>
                ))
                    
                }
            </div>
        </div>
    )

}