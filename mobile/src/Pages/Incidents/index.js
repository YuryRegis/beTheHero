import styles from './style';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';


function Incidents() {
    const navigation = useNavigation();
    const [total, setTotal] = useState(0);
    const [incident, setIncident] = useState([]);


    function goToDetails(incident){
        navigation.navigate('Details', {incident});
    };

    async function loadIncidents(){
        const response = await api.get('incidents');
        setIncident(response.data);
        setTotal(response.headers['x-total-count']);
    };

    useEffect( () => {
        loadIncidents();
    }, []);

    return(
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg }/>
                <Text style={ styles.headerText }>
                    total de <Text style={ styles.headerTextBold }>{`${total} casos`}</Text>
                </Text>
            </View>
            <Text style={ styles.title }>
                Bem-Vindo!
            </Text>
            <Text style={ styles.description }> 
                Escolha um dos casos abaixo e seja o Herói!
            </Text>
            <FlatList 
                data={ incident }
                style={ styles.incidentsList }
                showsVerticalScrollIndicator={false}
                keyExtractor={ incident => String(incident.id) }
                renderItem={ ({item: incident}) => (
                    <View style={ styles.incident }>
                        <Text style={ styles.incidentProperty }>
                            ONG
                        </Text>
                        <Text style={ styles.incidentValue }>
                            {incident.name}
                        </Text>
                        <Text style={ styles.incidentProperty }>
                            CASO:
                        </Text>
                        <Text style={ styles.incidentValue }>
                            {incident.title}
                        </Text>
                        <Text style={ styles.incidentProperty }>
                            VALOR:
                        </Text>
                        <Text style={ styles.incidentValue }>
                            {Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(incident.value)}
                        </Text>
                        <TouchableOpacity 
                            style={ styles.detailsButton } 
                            onPress={ () => goToDetails(incident) }>
                                <Text style={ styles.detailsButtonText }>Ver mais detalhes</Text>
                                <Feather name="arrow-right" size={17} color='#E02041'/>
                        </TouchableOpacity>
                    </View>
                )}
            />  
        </View>
    );
}

export default Incidents;