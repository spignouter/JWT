import React from "react";
import styles from "./styleHT.module.css"

export default function HeroThree(){
    return (
    <div className={styles.hero_Three}>
    <div className={styles.Hero_imgThree}></div>
    <div className={styles.categoriesThree}><div className={styles.InWorld} >в мире</div></div>
    <div className={styles.news_Three}> Побежали побежали, наши пальчики устали</div>
    <div className={styles.avtor_Three}>от Пользователя 1 - 21 янв. 2021</div>
    </div>
    )
}