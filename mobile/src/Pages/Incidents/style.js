import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerText: {
        fontSize:15,
        color:'#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginTop: 48,
        color:'#13131a',
        marginBottom: 16,
        fontWeight: 'bold'
    },

    description: {
        fontSize:16,
        lineHeight:24,
        color: '#737380'
    },

    incidentsList: {
        marginTop: 32
    },

    incident: {
        padding:24,
        borderRadius:9,
        marginBottom:16,
        backgroundColor:'#FFF'
    },

    incidentProperty: {
        fontSize: 14,
        color:'#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop:9,
        fontSize:15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },

    detailsButtonText:{
        fontSize:15,
        color: '#E02041',
        fontWeight:'bold'
    }

});
