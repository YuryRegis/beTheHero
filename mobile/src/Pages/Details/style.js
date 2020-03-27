import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight+20,
    },

    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    incident: {
        padding:24,
        marginTop:49,
        borderRadius:9,
        marginBottom:16,
        backgroundColor:'#FFF'
    },

    incidentProperty: {
        fontSize: 14,
        marginTop: 24,
        color:'#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop:9,
        fontSize:15,
        color: '#737380'
    },

    contactBox:{
        padding:24,
        borderRadius:9,
        marginBottom:16,
        backgroundColor:'#FFF'
    },

    heroTitle: {
        fontSize:20,
        lineHeight:30,
        color: '#13131a',
        fontWeight:'bold'
    },

    heroDescription:{
        fontSize:15,
        marginTop:16,
        color: '#737380'
    },

    actions: {
        marginTop:16,
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    action: {
        height:50,
        width:'49%',
        borderRadius:9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E02041',
    },

    actionText: {
        color:'#fff',
        fontSize: 16,
        fontWeight:'bold'
    }

});
