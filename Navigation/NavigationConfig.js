import React from "react";
import {
    SafeAreaView, View, Text,StyleSheet,ScrollView, ImageBackground
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator ,DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FavScreen from "../Screens/FavScreen";
import HomeScreen from "../Screens/HomeScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CartScreen from "../Screens/CartScreen";
const defaultOptionsForStack =  {
    defaultNavigationOptions: {
       
    headerStyle: {
        backgroundColor: '#e6005c',
        elevation: 0,
        shadowOpacity: 0
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
         fontSize:18
    }
}   
      
  };

   const CategoriesStack = createStackNavigator({
      Categories : {
          screen : CategoriesScreen,
          navigationOptions : {
            headerTitle : " Categories"
        }
      },
    //   CategoriesProducts : {
    //       screen : CategoriesProductsScreen,
          
   

  }, defaultOptionsForStack
  
  );     

  const HomeStack = createStackNavigator({
   
    Home : {
        screen : HomeScreen,
        navigationOptions : {
          headerTitle : "Home Screen"
      }
    },
    // Cart : {
    //     screen : CartScreen
    // }

}, defaultOptionsForStack

);     


const FavStack = createStackNavigator({
   
    FavScreen : {
        screen : FavScreen,
        navigationOptions : {
          headerTitle : "Wish List"
      }
    },

//     Cart : {
//         screen : CartScreen
//     }

}, defaultOptionsForStack

);     


const CartStack = createStackNavigator({
   
    Cart : {
        screen : CartScreen,
        navigationOptions:{
            headerTitle : "Items in Cart"
        }
    },
}, defaultOptionsForStack

);     






  const NavigationDrawer = createDrawerNavigator({
    Home: {
        screen : HomeStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="home" size={20} color={tintColor} />
                   }
        }
        },
    Categories : {
        screen : CategoriesStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="th-list" size={20} color={tintColor} />
                   }
        }
        },

    Favourites : {
        screen : FavStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return    <Fontisto name="heart" size={20} color={tintColor} />
                   }
        }
        },
    Cart : {
        screen : CartStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="shopping-cart" size={20} color={tintColor} />
                   }
        }
        },
    },
    {
        contentOptions: {
            activeTintColor: "#e6005c"
        },
        contentComponent: (props) => (
           
         <SafeAreaView>
             <View style={{height: 100,alignItems: 'center', justifyContent: 'center'}}>
             <ImageBackground resizeMode="cover" source={require("../assets/images/companyIcon.jpg")} style={{width: '100%', height: '100%'}}>
                <Text style={{fontSize:22, color:"white", textAlign : "center", marginVertical:50}}>Sanan Ali</Text>
            </ImageBackground>
             </View>
           <ScrollView>
             <DrawerItems {...props} />
           </ScrollView>
         </SafeAreaView>
        )
     });

const AppContainer = createAppContainer(NavigationDrawer);

export default AppContainer ;











