import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function History({route, navigation}){
  const {user} =route.params;
    const {history} = route.params;
    const listHeader = () => {
        return(
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>History {user}</Text>
            <View style={{height:1, backgroundColor: 'blue'}}/>
          </View>
        );
      }
return(
    <View style={styles.container}> 
    <StatusBar style="auto" />
    <View style={styles.listcontainer}>
            <FlatList 
            data={history}
            renderItem={({item})=> <Text style ={{fontSize:18}}>{item}</Text>}
            keyExtractor={((item,index) => index.toString())}
            ListHeaderComponent={listHeader}
            />
           </View>
</View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listcontainer:{
        flex:4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
      },
});