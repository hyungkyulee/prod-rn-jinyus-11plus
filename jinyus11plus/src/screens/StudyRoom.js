import React, { useParams, useEffect, useState }  from 'react'
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { 
  Container, 
  Button,
  Icon,
  Card,
  CardItem,
  Right,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
} from 'native-base'

import { 
  Grid,
  Row
} from 'react-native-easy-grid'

import {AuthContext} from '../contexts/AuthContext'
import BooksMenu from '../components/BooksMenu'
import ChapterProgress from '../components/ChapterProgress'


const StudyRoom = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext)
  const [books, setBooks] = useState([])

  useEffect(() => {
    (async () => {
      try {
        // const response = await fetch(`${config.API_HOST}/announcements`)
        const response = await fetch('https://h6wan8jdtk.execute-api.eu-west-1.amazonaws.com/dev/books')
        const json = await response.json()
        setBooks(json.data)
      } catch (error) {
        console.log('error: ', error)
      }

    })()
  }, [])

  return (
    <Container style={styles.container}>
      <Grid>
        <Row size={1} style={styles.rowInnerMenu}>
          <Button style={styles.button}><Text style={styles.textButton}>ALL</Text></Button>
          <Button style={styles.button}><Text style={styles.textButton}>AWARD</Text></Button>
          <Button style={styles.button}><Text style={styles.textButton}>REVIEW</Text></Button>
        </Row>
        <Row size={8} style={styles.rowCourse}>
          <Tabs renderTabBar={()=> <ScrollableTab style={{ height: 140, borderWidth:0, marginBottom: 20}} />} tabBarUnderlineStyle={{ backgroundColor: 'transparent'}} >
            {books.map((item) => (
              <Tab 
                heading={<TabHeading><BooksMenu book={item} /></TabHeading>}
                style={{ backgroundColor:'transparent'}}>
                <ChapterProgress navigation={navigation} id={item.id} />
              </Tab>
            ))}
          </Tabs>
        </Row>
      </Grid>
    </Container>

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Main</Text>
    //   <Button
    //     title="Go to Main... again"
    //     onPress={() => navigation.push('main')}
    //   />
    //   <Button title="Go to Home" onPress={() => navigation.navigate('splash')} />
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    //   <Button
    //     title="Go back to SPLASH screen in stack"
    //     onPress={() => navigation.popToTop()}
    //   />
    //   <Text>----- Signed in! -----</Text>
    //   <Button title="Sign out" onPress={signOut} />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F3F5F9',
  },
  rowInnerMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  rowCourse: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  card: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#3C80D116',
    borderRadius: 20,
    padding: 20,

    alignSelf: 'center',
    marginTop: 20,
  },
  startIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5468FF',
    shadowColor: '#3C80D116',
    shadowOffset: {width: 0, height: 12},
    shadowRadius: 10,
    shadowOpacity: 20,
    right: 0
  },
  image: {
    width: 240,
    height: 240,
    // resizeMode: '',
  },
  title: {
    paddingVertical: 7,
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#344356',
  },
  subtitle: {
    paddingBottom: 0,
    marginBottom: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#344356',
  },
  text: {
    paddingVertical: 2,
    fontFamily: 'Montserrat-Light',
    fontSize: 20,
    color: '#344356',
  },
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#3C80D116',
    shadowOffset: {width: 0, height: 12},
    shadowRadius: 10,
    shadowOpacity: 20,
    marginHorizontal: -3
  },
  textButton: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    color: '#344356',
  },
  iconButton: {
    alignSelf: 'center',
    paddingVertical: 3,
    paddingLeft: 4,
    color: '#FFF', 
    fontSize: 28, 
    marginLeft: 10, 
    paddingHorizontal: 0, 
    marginRight:0
  },
  link: {
    paddingTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'rgba(52,67,86,0.4)'
  }
})

export default StudyRoom
