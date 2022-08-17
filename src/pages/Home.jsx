import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

const home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>LISTA DE TAREAS</Text>
        <Button>ADD</Button>
      </View>
    </SafeAreaView> 
  )
}

export default home