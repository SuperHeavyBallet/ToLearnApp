import styles from "./menuLink.module.css"

export default function MenuLink( {linkText, linkAddress})
{
    return(
        <div className={styles.linkLine}>
            

            <a href={linkAddress}>


                <svg 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 53 53"
                    height="20px" 
                    width="20px"

                    stroke="currentColor"       
                    strokeWidth="4"
                    >
                    <path d="M45.707,10.075l-9.794-9.783C35.726,0.105,35.471,0,35.206,0H8C7.447,0,7,0.448,7,1v51c0,0.552,0.447,1,1,1h37 c0.553,0,1-0.448,1-1V10.783C46,10.517,45.895,10.263,45.707,10.075z M42.586,10H36V3.414L42.586,10z M9,51V2h25v9 c0,0.552,0.447,1,1,1h9v39H9z"></path> 
                
                </svg>
                    
            <h4>{linkText}</h4>
            </a>
        </div>

    )
}