import React from "react";
import styles from "./styleF.module.css"

export default function Footer(){
    return (
        <div className={styles.Footer}>
        <div className={styles.About}>
            <div className={styles.AboutHeader}>Baikal info</div>
            <div className={styles.SocialsFooter}>
                <div className={styles.facebook}><img src="ff.png"/></div>
                <div className={styles.twitter}><img src="tt.png"/></div>
                <div className={styles.google}><img src="gg.png"/></div>
                <div className={styles.insf}><img src="ii.png"/></div>
            </div>

        </div>
        <div className={styles.UsefulLinks}>
            <div className={styles.LinksFooter}>Ссылки</div>
            <div className={styles.AboutFooter}>
                О нас 
                Новости
                Анонсы
                Поддержка
                Контакты              
                </div>
        </div>

        <div className={styles.MostPopular}>
            <div className={styles.MostPopularHeader}>популярные публикации</div>
            <div className={styles.MostPopularOne}>
                <div className={styles.MostPopularEllipseOne}></div>
                <div className={styles.MostPopularTextOne}>Какой то текст какой то статьи</div>
                <div className={styles.MostPopularAvtorOne}>От Пользователя 1 - 21 янв. 2021</div>
            </div>
            <div className={styles.MostPopularTwo}>
                <div className={styles.MostPopularEllipseTwo}></div>
                <div className={styles.MostPopularTextTwo}>Какой то текст какой то статьи</div>
                <div className={styles.MostPopularAvtorTwo}>От Пользователя 1 - 21 янв. 2021</div>
            </div>
        </div>

        <div className={styles.FooterNewsLetter}>
            <div className={styles.FooterNewsLetterHeadr}>Подписаться на новости</div>
            <div className={styles.FooterNewsLetterText}>подписаться на новости</div>
            <div className={styles.FooterIcon}><img src="ifooter.png"/></div>
                <div className={styles.FooterNewsButton}>
                    <div className={styles.YourMail}>Ваш email</div>
                    <div className={styles.FooterBtn}>
                        <div className={styles.FooterOk}>OK</div>
                        <div className={styles.FooterBtnRectangle}></div>
                    </div>
                </div>            
        </div>


    </div>
    )
};