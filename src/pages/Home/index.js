import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions'

const list =[
  {
    id: 1,
    label: 'Internet',
    value: '99,99',
    date: '17/06/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente Ronny',
    value: '20,00',
    date: '09/07/2023',
    type: 1 //receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '12.000,00',
    date: '09/07/2023',
    type: 1 //receita
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Keyle Alves"/>
      <Balance saldo="12.456,76" gastos="-6.345,23"/>
      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator = {false}
        renderItem={({item}) => <Moviments data={item}/>}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin:14
  },
  list:{
    marginEnd: 14,
    marginStart: 14,
  }
})
