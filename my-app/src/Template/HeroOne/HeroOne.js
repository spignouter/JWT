import React from "react";
import styles from "./styleHO.module.css"

// export default function HeroOne(props){
//     return (
//     <div className={styles.hero_One}>
//     <div className={styles.hero_baseOne} ></div>
//     <div className={styles.hero_imgOne}></div>
//     <div className={styles.categoriesOne}><div className={styles.InWorld}>события</div></div>
//     <div className={styles.news_HeroOne}>{props.title}</div>
//     <div className={styles.avtor_HeroOne}>от {props.author} {props.date}</div>
//     </div>
//     )
// };

export default class HeroOne extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
     <div className={styles.hero_One}>
    <div className={styles.hero_baseOne} ></div>
    <div className={styles.hero_imgOne}></div>
    <div className={styles.categoriesOne}><div className={styles.InWorld}>события</div></div>
    <div className={styles.news_HeroOne}>{this.props.title}</div>
    <div className={styles.avtor_HeroOne}>от {this.props.author} {this.props.date}</div>
    </div>
        );
    }
}
