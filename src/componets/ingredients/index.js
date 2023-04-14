import { View, Text, StyleSheet} from "react-native"


export function Ingredients( {data} ) {
    return(
        <View style={styles.container}>
            <Text style={styles.nome}>
                {data.name}
            </Text>
            <Text>
                {data.amount}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4,
    }, 
    nome:{
        fontSize: 16,
        fontWeight: 500
    }
})