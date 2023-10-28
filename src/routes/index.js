import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../page/home";

const Rotas = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Rotas.Navigation>
                <Rotas.Screen
                 name="Home"
                 component={HomeScreen}
                 />
            </Rotas.Navigation>
        </NavigationContainer>
    )
}