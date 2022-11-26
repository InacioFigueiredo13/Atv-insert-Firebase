import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';

export default function Details({ navigation, route }) {

    const [nomeAluno, setNomeAluno] = useState("");
    const [idadeAluno, setIdadeAluno] = useState("");
    const [nota1Aluno, setNota1Aluno] = useState("");
    const [nota2Aluno, setNota2Aluno] = useState("");
    const [nota3Aluno, setNota3Aluno] = useState("");
    const [linkAluno, setLinkAluno] = useState("")


    useEffect(() => {
        setNomeAluno(route.params.nome);
        setIdadeAluno(route.params.idade)
        setNota1Aluno(route.params.nota1)
        setNota2Aluno(route.params.nota2)
        setNota3Aluno(route.params.nota3)
        setLinkAluno(route.params.link)
    }, [])

    return (
        <View style={styles.container}>

            <StatusBar style="auto" />

            <TouchableOpacity style={styles.voltarBtn} onPress={() => navigation.goBack()}>
                <Image style={{ width: 25, height: 25 }} source={require('../../assets/voltar.png')} />
                <Text style={styles.voltarText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.aboutStudent}>
                <Image style={{ width: '90%', height: 250, alignSelf: 'center', marginVertical: 10 }} source={{ uri: linkAluno }} />

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Nome: </Text>
                    <Text style={styles.textValue}>{nomeAluno}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Idade: </Text>
                    <Text style={styles.textValue}>{idadeAluno}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>1° Nota: </Text>
                    <Text style={styles.textValue}>{nota1Aluno}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>2° Nota: </Text>
                    <Text style={styles.textValue}>{nota2Aluno}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>3° Nota: </Text>
                    <Text style={styles.textValue}>{nota3Aluno}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        padding: 10
    },
    voltarBtn: {
        alignItems: 'center',
        textAlign: 'center',
        width: '20%',
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
    },
    voltarText: {
        marginLeft: 5,
        fontSize: 20,
        color: '#028090',
    },
    aboutStudent: {
        width: '90%',
        backgroundColor: '#e8eaea',
        marginTop: 20,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 20
    },
    text: {
        fontSize: 20,
        marginTop: 2,
        fontWeight: 'bold'
    },
    textValue: {
        fontSize: 20,
        marginTop: 2
    }
});