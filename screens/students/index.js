import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import CardStudents from '../../components/cardStudent';

import firebase from '../../config/firebaseConnection';
import db from '../../config/firebaseConnection'

import { ref, get, getDatabase, onChildAdded } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function Students({navigation}) {

    const [alunos, setAlunos] = useState([]);

    async function buscarAlunos() {
        const database = getDatabase();
        var referenceProgram = ref(database, "Alunos");
        console.log(referenceProgram)
        onChildAdded(referenceProgram, (snapshot) => {
            var data = {
                key: snapshot.key,
                nome: snapshot.val().nome,
                idade: snapshot.val().idade,
                nota1: snapshot.val().nota1,
                nota2: snapshot.val().nota2,
                nota3: snapshot.val().nota3,
                imagem: snapshot.val().link
            }
            setAlunos(alunos => [...alunos, data]);
        })
    };

    useEffect(() => {
        buscarAlunos();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titulo}>ALUNOS</Text>

            <ScrollView>

                <View style={{flex: 1}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={alunos}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => {
                            return (
                                <CardStudents
                                    nome={item.nome}
                                    idade={item.idade}
                                    nota1={item.nota1}
                                    nota2={item.nota2}
                                    nota3={item.nota3}
                                    imgPerfil={item.imagem}
                                    navigation={navigation}
                                />
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
    },
});