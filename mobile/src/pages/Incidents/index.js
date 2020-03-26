import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>
                Bem-Vindo!
            </Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>

            <FlatList
                style={styles.incidentsList}
                data={[1,2]}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            Value:
                        </Text>

                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            Value:
                        </Text>

                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            Value:
                        </Text>

                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            Value:
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => { }}
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