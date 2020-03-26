import './styles.css';
import api from '../../services/api';
import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';


function NewIncident() {

    const [ title, setTitle ] = useState('')
    const [ value, setValue ] = useState('')
    const [ description, setDescription ] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    const newIncident = async (e) => {
        e.preventDefault()

        const data = { title, description, value }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch (error) {
            alert('Error to register incident, try again later.')
        }
    }

    return(
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver
                    isso.
                </p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para Home
                </Link>
            </section>
            <form onSubmit={newIncident}>
                <input 
                value={title} onChange={e => setTitle(e.target.value)}
                placeholder="Título do Caso"/>
                <textarea 
                value={description} onChange={e => setDescription(e.target.value)}
                placeholder="Descrição"/>
                <input 
                value={value} onChange={e => setValue(e.target.value)}
                placeholder="Valor em reais"/>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}

export default NewIncident;