import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function saveFavorites(key, newItem){
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item => item.id === newItem.id)

    if(hasItem){
        console.log("Esse item ja está salvo na sua lista")
        return;
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("Salvo com sucesso")

}

export async function removeItem(id){
    let receipes = await getFavorites("@appreceitas")

    let myFavorites = receipes.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
    console.log("Item excluido com sucesso")
    return myFavorites;
}

export async function isFavorites(receipes){

    let myReceapes = await getFavorites("@appreceitas")

    const favorite = myReceapes.find(item => item.id === receipes.id)

    if(favorite){
        return true;
    }
    return false;
}