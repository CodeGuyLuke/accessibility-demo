import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native'

import { Input, Checkbox, Button } from '../components'
import meetupCoverImage from '../../assets/images/meetup_cover.png'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleTermsCheckboxPress = () => setTermsAccepted(!termsAccepted)
  const handleLoginButtonPress = () => Alert.alert('Logging in...')

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Image source={meetupCoverImage} style={styles.image} />
        <View style={styles.contentContainer}>
          <Input type="email" value={email} onChangeText={setEmail} />
          <Input type="password" value={password} onChangeText={setPassword} />
          <Checkbox
            checked={termsAccepted}
            onPress={handleTermsCheckboxPress}
            label="I have read and accept Terms & Conditions"
          />
          <Button
            disabled={!email || !password || !termsAccepted}
            onPress={handleLoginButtonPress}
            label="Log in"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 40,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
})
