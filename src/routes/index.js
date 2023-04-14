import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { StackRoutes } from './stackRoutes'
import { Favorites } from "../pages/favorites";
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                flex: 2,
                justificontent: false,
                headerShown: false,
                safeAreaInsets: { bottom: 0 },
                tabBarHideOnKeyboard: true,
                keyboardHidesTabBar: true,
                tabBarActiveTintColor:"#121212",
                tabBarShowLabel: false,
            
                taBarStyle:{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#FFF",
                    borderTopWidth: 1,
                    elevation: 0,
                    shadowOpacity: 0,
                }
            }}
        >
         <Tab.Screen
            name="HomeTab" 
            component={StackRoutes}
            options={{
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                       return  <Ionicons name="home" color="#000" size={size}/>
                    }
                    return <Ionicons name="home-outline" color={color} size={size}/>
                },
                
            }}
            />
        <Tab.Screen
            name="FavoritesTab"
            component={Favorites}
            options={{
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="heart" color="#000" size={size}/>
                    }
                    return <Ionicons name="heart-outline" color={color} size={size}/>
                },
             
            }}
        />
        </Tab.Navigator>
    )

}

    
