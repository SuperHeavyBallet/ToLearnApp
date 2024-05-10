import styles from "./randomCardDisplayElement.module.css"

export default function RandomCardDisplayElement({elementTitle, cardDetails}){
    
    function handlePreviewClick()
    {
        console.log(cardDetails[0]);
    }

    return(
        <div className={styles.elementPreview}
        onClick={handlePreviewClick}>
            <div className={styles.removeElement}>
                X
            </div>

            <div className={styles.elementText}>
                <div>
                    {elementTitle}
                    </div>
            </div>

            <div className={styles.completedSection}>
                    <div>
                        Yes / No
                        </div>
            </div>
            
        </div>
    )
}