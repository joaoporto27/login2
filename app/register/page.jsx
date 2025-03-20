"use client";

import Link from "next/link";
import styles from "./register.module.css";
import { useState } from "react";

export default function Register() {
    const [input1, setInput1] = useState(""); // Declara um estado para o primeiro input
    const [input2, setInput2] = useState(""); // Declara um estado para o segundo input
    const [match, setMatch] = useState(null); // Declara um estado para verificar se as senhas conferem
    const [error, setError] = useState(null); // Declara um estado para armazenar mensagens de erro

    const handleCheck = () => {
        if (input1 !== input2) {
          // Verifica se as senhas são diferentes
          setMatch(false); // Define que as senhas não conferem
          setError("As senhas não conferem"); // Define a mensagem de erro
        } else if (input1.length < 6) {
          // Verifica se a senha tem menos de 6 caracteres
          setMatch(false); // Define que as senhas não conferem
          setError("A senha deve ter no mínimo 6 caracteres"); // Define a mensagem de erro
        } else if (input1.length === 0) {
          // Verifica se o primeiro input está vazio
          setMatch(false); // Define que as senhas não conferem
          setError("Preencha o input 1"); // Define a mensagem de erro
        } else if (input2.length === 0) {
          // Verifica se o segundo input está vazio
          setMatch(false); // Define que as senhas não conferem
          setError("Preencha o input 2"); // Define a mensagem de erro
        } else {
          setMatch(true); // Define que as senhas conferem
          setError("Sucesso"); // Define a mensagem de sucesso
        }
      };
      
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
            <input className={styles.inputSenha}
            tittle="Senha"  
            type="password" 
            placeholder="Digite a senha" 
            value={input1} 
            onChange={(e) => setInput1(e.target.value)} 
            />
             <input className={styles.inputSenha}
            title="Confirmar senha"
            type="password" 
            placeholder="Repita a senha" 
            value={input2} 
            onChange={(e) => setInput2(e.target.value)} 
            />
             <button onClick={handleCheck}>Verificar</button>{" "}
            {/* Chama a função handleCheck quando o botão é clicado */}
            {match !== null && <p>{error}</p>}{" "}
            <link href="/profile" />
            {/* Exibe a mensagem de erro ou sucesso */}
    </div>
    <Link href="/profile" className={styles.button}>Registrar-se</Link>
                </form>
            </main>
        </div>
    );
}

