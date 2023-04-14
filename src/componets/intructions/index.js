import { View, Text , StyleSheet} from "react-native"


export function Instructions({data, index}) {
    return(
        <View style={styles.container}>
            <Text style={styles.nome}>{index+1}- </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 8,
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 18
    }, 
    text: {
        lineHeight: 20,
        fontSize: 15
    }
})