import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Calculator({navigation}) {
    const[numA, setNumA ] = useState('');
    const[numB, setNumB ] = useState('');
    const[result, setResult] = useState (0);
    const[history,setHistory] =useState([]);
  
    const calSum = () => {
      const sum = parseFloat(numA) + parseFloat (numB);
      setResult(sum);
      setHistory([...history, `${numA} + ${numB} = ${sum}`]);
    }
  
    const calSub = () => {
      const sub = parseFloat(numA) - parseFloat (numB);
      setResult(sub);
      setHistory([...history, `${numA} - ${numB} = ${sub}`]);
    }

  
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <Text style={{fontSize:20}}> Result: {result.toFixed(2)}</Text>
        <TextInput
        keyboardType='numeric'
        style={{fontSize:18, width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={numA => setNumA(numA)}
        value={String(numA)}
        />
              <TextInput
        keyboardType='numeric'
        style={{fontSize:18, width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={numB => setNumB(numB)}
        value={String(numB)}
        />
        </View>
        <View style={styles.buttoncontainer}>
          <Button onPress={calSum} title=" + " />
          <Button onPress={calSub} title=" - " />
          <View style={{ fontSize: 4, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
            title="History"
            onPress={() => navigation.navigate('History', {user: 'Marjo', history})} 
                />
                </View>
           </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    buttoncontainer: {
      flex:1,
      width:200,
      flexDirection:'row',
      backgroundColor:'#fff',
      alignItems:'flex-start',
      justifyContent:'space-around',
      padding:20,
    },
  });