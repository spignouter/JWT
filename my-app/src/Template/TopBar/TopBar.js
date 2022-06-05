import React from "react";
import styles from "./styleTP.module.css";
import Clock from "./Clock/Clock.js";

// export default function TopBar(){
//     return (
//         <div >
//         <div className={styles.base} ></div>
//         <div className={styles.menu}>
//             <a href="https://www.google.com/"><span className={styles.cont}>Контакты</span></a>
//             <a href="https://www.google.com/"><span className={styles.annonces}>Анонсы</span></a>
//             <a href="https://www.google.com/"><span className={styles.event}>События</span></a>
//             <a href="https://www.google.com/"><span className={styles.new}>Новости</span></a>
//         <Clock></Clock>
//         </div>
//         <div className={styles.signin_socials}></div>
//         <div className={styles.f}><a href="https://www.google.com/"><img alt="" src="f.png"/></a></div>
//         <div className={styles.t}><a href="https://www.google.com/"><img alt="" src="t.png"/></a></div>
//         <div className={styles.ins}><a href="https://www.google.com/"><img alt="" src="ins.png"/></a></div>
//         <div className={styles.log_in}><a href="https://www.google.com/">Log in</a></div>
//         <div className={styles.sign_in}><a href="https://www.google.com/">Sign in</a></div>
//     </div>
//     )
    
// }

export default class TopBar extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    


    render(){
        return(
        <div >
        <div className={styles.base} ></div>
        <div className={styles.menu}>
        <a href="https://www.google.com/"><span className={styles.cont}>Контакты</span></a>
         <a href="https://www.google.com/"><span className={styles.annonces}>Анонсы</span></a>
        <a href="https://www.google.com/"><span className={styles.event}>События</span></a>
        <a href="https://www.google.com/"><span className={styles.new}>Новости</span></a>
        <Clock></Clock>
        </div>
        <div className={styles.signin_socials}></div>
        <div className={styles.f}><a href="https://www.google.com/"><img alt="" src="f.png"/></a></div>
        <div className={styles.t}><a href="https://www.google.com/"><img alt="" src="t.png"/></a></div>
        <div className={styles.ins}><a href="https://www.google.com/"><img alt="" src="ins.png"/></a></div>
        {/* <div className={styles.log_in}><a href="https://www.google.com/">Log in</a></div>
        <div className={styles.sign_in}><a href="https://www.google.com/">Sign in</a></div> */}
        {/* <button className={styles.btm} onclick={this.}>авторизация</button> */}
    </div>

        );
    }
}