import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './Home.style';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jordan Doe' },
];

const Home = ({ navigation }: any) => {
  function ListUser() {
    return (
      <>
        {users.map((data: any) => {
          return (
            <View key={data?.id} style={styleUser as any}>
              <Text style={{ fontSize: 15 }}>
                {data?.id}. {data?.name}
              </Text>
            </View>
          );
        })}
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <IconMaterialCommunityIcons
            name={'lock-alert-outline'}
            size={80}
            color={'green'}
          />
          <IconMaterialCommunityIcons
            name={'wifi-lock-open'}
            size={50}
            color={'grey'}
          />

          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation?.navigate('Profile')}>
              <Text style={styles.text}>Click here to go to profile Page:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Home;
