import './styles.css';
import api from '../../services/api';
import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';



function Register() {
    
    const history = useHistory()
    const [ uf, setUf ] = useState('')
    const [ city, setCity ] = useState('')
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ whatsapp, setWhatsapp ] = useState('')

    async function handleRegister(e) {
        e.preventDefault()

        const data = { name, email, whatsapp, city, uf }
        
        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.yourId}`)
            history.push('/')
        } catch (error) {
            alert('Erro no Cadastro.')
        }
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
                        os casos da sua ONG.
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG" value={name} 
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    type="email" placeholder="Email" value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="Whatsapp" value={whatsapp} 
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="cidade" value={city} 
                        onChange={e => setCity(e.target.value)}
                        />

                        <input 
                        placeholder="uf" style={{ width: 80 }} value={uf} 
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register