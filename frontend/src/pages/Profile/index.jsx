import './styles.css';
import api from '../../services/api';
import LogoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


function Profile() {

    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    const [ incidents, setIncidents ] = useState([])

    useEffect(() => {

        async function profileFill() {

            try {
                const response = await api.get('profile', {
                    headers: {Authorization: ongId}
                })

                setIncidents(response.data)

            } catch (error) {
                alert('Error to get Incidents.')
            }
            
        }

        profileFill()
        
    }, [ongId])

    const handleDeleteIncident = async (id) => {

        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(inc => inc.id !== id))

        } catch (error) {
            alert('Error to delete item, please try again')
        }
    }

    const handleLogOut = () => {
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className="profile-container" >
            <header>
                <img src={LogoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogOut} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                { incidents.map( incident => {
                    return (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
                    </p>

                    <button onClick={() => handleDeleteIncident(incident.id) } type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                     </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Profile