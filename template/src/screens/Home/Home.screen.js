import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const users = useSelector(selectAll)

  function ListUser() {
    return users.map(data => {
      return (
        <View key={data.id} style={styleUser}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-person'} size={100} color={'purple'} />
          <Icon name={'ios-home'} size={100} color={'purple'} />

          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchUser())}>
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default Home
