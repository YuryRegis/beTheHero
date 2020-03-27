import React from 'react';
import styles from './style';
import * as Mail from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';


function Details() {
    const segue = useRoute();
    const navigator = useNavigation();
    const incident = segue.params.incident;
    const message = `Ola ${incident.name}, estou entrando em contato `
                    +`pois gostaria de ajudar no caso "${incident.title}".`

    function navigateBack(){
        navigator.goBack();
    
    };

    function sendMail() {
        Mail.composeAsync({
            body: message,
            subject: `Herói do caso: ${incident.title}`,
            recipients: [`${incident.email}`]
        });
    };
        
    function sendWpp() {
        Linking.openURL(`whatsapp://send?phone=${incident.wpp}&text=${message}`);
    };

    return(
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg }/>
                <TouchableOpacity onPress={ navigateBack }>
                    <Feather 
                        size={28}
                        name='arrow-left'
                        color='#E02041'
                    />
                </TouchableOpacity>
            </View>
            <View style={ styles.incident}>
                <Text style={ [styles.incidentProperty, {marginTop:0}] }>
                    ONG
                </Text>
                <Text style={ styles.incidentValue }>
                    {incident.name} de {incident.city}/{incident.uf}
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
            </View>
            <View style={ styles.contactBox }>
                <Text style={ styles.heroTitle }>
                    Salve o dia!
                </Text>
                <Text style={ styles.heroTitle }>
                    Que tal ser o Herói deste caso?
                </Text>
                <Text style={ styles.heroDescription }>
                    Entre em contato:
                </Text>
                <View style={ styles.actions }>
                    <TouchableOpacity style={ styles.action } onPress={sendWpp}>
                        <Text style={ styles.actionText }>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.action } onPress={sendMail}>
                        <Text style={ styles.actionText }>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Details;