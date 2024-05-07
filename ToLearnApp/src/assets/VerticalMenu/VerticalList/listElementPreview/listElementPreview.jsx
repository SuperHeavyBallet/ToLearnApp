import styles from "./listElementPreview.module.css"

export default function ListElementPreview({elementTitle, cardDetails})
{
    
    function handlePreviewClick()
    {
        console.log(cardDetails);
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