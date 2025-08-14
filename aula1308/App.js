import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={{
        marginTop: 20,
        marginLeft: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={estilos.textoAzul}>Texto azul</Text>
      <Text style={estilos.textoVermelho}>Texto vermelho</Text>
      <Text style={estilos.textoVerde}>Texto verde</Text>
      <Text>teste</Text>
    </View>
    
  );
}
const estilos = StyleSheet.create({
  textoAzul: {
color: 'blue'
  },
  textoVermelho: {
color: 'red'    
  },
  textoVerde: {
color: 'green'
  },
  caixaRetangular: {
    width: 100,
    height: 50,
    backgroundColor: 'purple'
  }
})
