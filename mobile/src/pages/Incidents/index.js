import React,{useEffect,useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
    const [incidents,setIncidents] = useState([]);
    const [totalIncidents,setTotalIncidents] = useState(0);
    
    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }

    async function loadIncidents(){
        const response = await api.get('incidents');
        setIncidents(response.data);
        setTotalIncidents(response.headers['x-total-count']);
    }
    useEffect(()=>{
        loadIncidents();
    },[]);

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>
                Bem-Vindo!
            </Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>
            <FlatList
                data={incidents}
                style={styles.incidentsList}
                keyExtractor={incident=>String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{item.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{item.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{
                            Intl.NumberFormat(
                                'pt-BR',{
                                style:'currency',
                                currency:'BRL'
                                }).format(item.value)
                            }
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=>navigateToDetail(item)}
                        >
                            <Text style={styles.detailsButtonText}>
                                Ver mais detalhes
                            </Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}>
            </FlatList>
        </View>
    );
}