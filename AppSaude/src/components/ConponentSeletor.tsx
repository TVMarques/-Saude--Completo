import { Platform } from 'react-native';
import ComponentSeletorAndroid from '../components/Exibidor'

type OpcaoSeletor = {
    rotulo: string;
    valor: string;
};

type PropsSeletor = {
    valorSelecionado: string;
    aoSelecionar: (valor: string) => void;
    opcoes: OpcaoSeletor[];
    titulo: string;
};
  

export default function ComponentSeletor(props: PropsSeletor){
    return  <ComponentSeletorAndroid {...props} />;
}