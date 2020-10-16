import * as React from 'react'
import {View, TextInput, Text, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native'
import { FieldError } from 'react-hook-form'

  
function login(){

    return (
      <KeyboardAwareScrollView >
        <View style={styles.formContainer}>
          <Form {...{ register, setValue, validation, errors }}>
            <Input name="name" label="Name " />
            <Input name="email" label="Email" />
            <Input name="password" label="Password" secureTextEntry={true} />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </Form>
        </View>
        <Text>inscription</Text>
      </KeyboardAwareScrollView>
    )
}

export default login ;