import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, } from "react-native";

export default function CardStudents({
    nome,
    idade,
    nota1,
    nota2,
    nota3,
    imgPerfil,
    navigation }) {

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', {nome: nome, idade: idade, nota1: nota1, nota2: nota2, nota3: nota3, link: imgPerfil})}>
            <Image style={{ width: '100%', height: 250 }} source={{ uri: imgPerfil }}></Image>
            <Text style={styles.text}>Nome: {nome}</Text>
            <Text style={styles.text}>Idade: {idade}</Text>
            <Text style={styles.text}>1° Nota: {nota1}</Text>
            <Text style={styles.text}>2° Nota: {nota2}</Text>
            <Text style={styles.text}>3° Nota: {nota3}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#e8eaea",
        width: '90%',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        alignSelf: 'center',
    },
    text: {
        fontSize: 15,
        marginVertical: 5
    }

});
