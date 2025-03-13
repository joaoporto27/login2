import styles from "./register.module.css";

export default function Register() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Registrar-se</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Nome</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Senha</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label >Confirmar Senha</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required />
                    </div>
                    <button type="submit" className={styles.button}>Registrar-se</button>
                </form>
            </main>
        </div>
    );
}

