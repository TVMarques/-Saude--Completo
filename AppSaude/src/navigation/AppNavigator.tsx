import { createNativeStackNavigator } from '@react-navigation/native-stack';//Função usada para criar um navegador de pilha nativo (stack), no estilo "ir para uma nova tela e depois voltar", como acontece em apps mobile tradicionais.
import LoginScreen from '../pages/LoginScreen';
import OpcoesScreen from '../pages/OpcoesScreen';
import AgendamentoScreen from '../pages/AgendamentoScreen';
import SucessoScreen from '../pages/SucessoScreen';
import InfomacoesDicasScreen from '../pages/InformacoesDicasScreen';
import AgendamentoExameScreen from '../pages/AgendamentoExamesScreen';
import EditarEExcluirScreen from '../pages/EditarEExcluirScreen';
import TelaDesejaExcluir from '../pages/TelaDesejaExcluir';
import TelaExcluidoSucesso from '../pages/TelaExcluidoSucesso';
import AjudaSuporte from '../pages/AjudaSuporte';
import HistoricoPaciente from '../pages/HistoricoPaciente';
import MedicalForm from '../pages/Anamnese';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Button, StyleSheet, Image} from 'react-native';

//Cria uma instância do stack navigator, que será usada para definir as telas e a ordem da navegação.
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
   
         <Stack.Navigator initialRouteName="Login">{/*Define que a primeira tela exibida será a AgendamentoScreen.*/}
            <Stack.Screen 
              name="Login" //nome da rota, usado para navegar programaticamente.
              component={LoginScreen} // qual componente React será renderizado.
              options={{ headerShown: false }}//oculta o cabeçalho padrão da tela.
            />

            <Stack.Screen
              name="Opcoes"
              component={OpcoesScreen}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="Agendamento"
              component={AgendamentoScreen}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="AgendamentoExame"
              component={AgendamentoExameScreen}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="Sucesso"
              component={SucessoScreen}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="InfoDica"
              component={InfomacoesDicasScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="EditarEExcluir"
              component={EditarEExcluirScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="TelaDesejaExcluir"
              component={TelaDesejaExcluir}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="TelaExcluidoSucesso"
              component={TelaExcluidoSucesso}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="AjudaSuporte"
              component={AjudaSuporte}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="HistoricoPaciente"
              component={HistoricoPaciente}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Anamnese"
              component={MedicalForm}
              options={{ headerShown: false }}
            />

        </Stack.Navigator>
   
  );
}

