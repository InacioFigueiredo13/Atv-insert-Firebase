import * as React from 'react';

import Register from '../screens/register';
import Students from '../screens/students'
import Details from '../screens/details/index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function tabs({ navigation }) {
    return (
        <Tab.Navigator initialRouteName="Alunos"
            screenOptions={{
                tabBarInactiveBackgroundColor: '#05668d',
                tabBarActiveBackgroundColor: '#028090',
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#fff'
            }}>
            <Tab.Screen
                options={{
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#05668d',
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }}
                name="Alunos"
                component={Students}
            />
            <Tab.Screen
                options={{
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#05668d',
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }}
                name="Registrar"
                component={Register}
            />
        </Tab.Navigator>
    );
}

export default function Stacks() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={tabs}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}