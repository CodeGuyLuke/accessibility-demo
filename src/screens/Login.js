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
import {
  EmailInputHint,
  PasswordInputHint,
  CheckboxButtonHint,
  CheckboxLabelHint,
} from '../accessibility/hints'
import meetupCoverImage from '../../assets/images/meetup_cover.png'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleTermsCheckboxPress = () => setTermsAccepted(!termsAccepted)
  const handleLoginButtonPress = () => Alert.alert('Logging in...')

  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Image
          source={meetupCoverImage}
          style={styles.image}
          accessible={true}
          accessibilityLabel="React Native Poznań meetup background image."
        />
        <View style={styles.contentContainer}>
          <Input
            accessibilityLabel="EmailInput"
            accessibilityHint={EmailInputHint}
            type="email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            accessibilityLabel="PasswordInput"
            accessibilityHint={PasswordInputHint}
            type="password"
            value={password}
            onChangeText={setPassword}
          />
          <Checkbox
            checked={termsAccepted}
            onPress={handleTermsCheckboxPress}
            label="I have read and accept Terms & Conditions"
            accessibilityLabel="TermsAndConditions"
            accessibilityButtonHint={CheckboxButtonHint}
            accessibilityLabelHint={CheckboxLabelHint}
          />
          <Button
            accessibilityLabel="LoginButton"
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
