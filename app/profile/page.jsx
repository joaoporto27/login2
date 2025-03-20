"use client";

import styles from "./profile.module.css";

export default function Home() {
  
    return (
      <div className={styles.page}>
        <main className={styles.main}>
        <section className={styles.sobre}>
          <h1>Sobre Mim</h1>
          <p>Meu nome é João Vitor Porto, sou da turma 2TDS1 do curso de desenvolvimento de sistemas no Senai</p>
        </section>
        <section>
          <h2>Tecnologias</h2>
          <div className={styles.cards}>
            <div className={styles.row}>
              <div className={styles.card}>
                <img src="https://img.icons8.com/color/512/javascript.png" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className={styles.card}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
                <p>React</p>
              </div>
              <div className={styles.card}>
                <img src="https://img.icons8.com/fluent/512/node-js.png" alt="Node.js" />
                <p>Node.js</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.card}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className={styles.card}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="CSS" />
                <p>CSS</p>
              </div>
            </div>
          </div>
        </section>
         </main>
      </div>
    )
  }