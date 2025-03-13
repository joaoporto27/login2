"use client"

import styles from "./login.module.css"
import Link from "next/link"


export default function Home() {
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Email </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <Link href="/register">Registrar-se</Link>
       </main>
    </div>
  )
}