import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native";


export function FoodList( {data} ){
    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate("Detail", {data : data})
    }

    return(
        <TouchableOpacity octiveOpacity={0.9} style={styles.container} onPress={handleNavigate}>
            <Image source={{ uri: data.cover}}
            style={styles.cover}
            />
            <View style={styles.info}>
                <Text style={styles.nameingrediente}>{data.name}</Text>
                <Text style={styles.description}>{data.total_ingredients} ingredientes | {data.time} min</Text>
            </View>
            <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0,0,0, 0.70)', 'rgba(0,0,0, 0.95)']}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
    },
   cover:{
       width: '100%',
       height: 200,
       borderRadius: 14
   },
   info:{
    position: 'absolute',
    left: 14,
    bottom: 14,
    zIndex: 99,
   },
   nameingrediente:{
    fontSize: 18,
    color: "#FFF",
    fontWeight: 'bold'
   },
   description:{
    color: "#FFF"
   },
   gradient:{ ///sombra preta em baixo da imagem
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: '55%',
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: 'transparent'
   }
})


