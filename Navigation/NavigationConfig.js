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
        backgroundColor: '#FF543C',
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





  const TabNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return   <Icon name="home" size={20} color={tintColor} />
               }
        }
    },  
    Categories: {
        screen :  CategoriesStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
             return   <FontAwesome name="th-list" size={20} color={tintColor} />
            }
                
            },
        
        
    },
    
    "Favourites": {
    screen :  FavStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => { 
                return   <Fontisto name="heart" size={20} color={tintColor} />
               }
    }
    },   
    Cart: {
        screen :  CartStack,
            navigationOptions : {
                tabBarIcon: ({ tintColor }) => {
                    return   <Icon name="shopping-cart" size={20} color={tintColor} />
                   }
        }
        },
  }, {
      tabBarOptions : {
        showLabel : false,
          activeTintColor : "#FF543C",
          inactiveTintColor : "black",
          tabStyle : {height : 50 , zIndex:99, borderColor:"white", borderTopWidth:0},
          labelStyle : {fontSize: 12, paddingTop:2,paddingBottom:3, fontFamily : "halfmoon_bold",},
      }
  }
  
  
  );

 
const AppContainer = createAppContainer(TabNavigator);

export default AppContainer ;











