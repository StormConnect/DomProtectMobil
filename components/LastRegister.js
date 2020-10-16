import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Content } from 'native-base'

const LastRegister = () => {
    return (
        <Container style={{ backgroundColor: 'white' }} >
            <Content>
                <View style={{
                    marginTop: 20, margin: 20, backgroundColor: '#fcfcfc', justifyContent: 'center',
                    alignContent: 'center', alignSelf: 'center', shadowOffset: {
                        width: 0,
                        height: 50,
                    },
                    shadowOpacity: 10.57,
                    shadowRadius: 15.19,

                    elevation: 50,
                }}>
                    <Text>ok</Text>
                   
                </View>

            </Content>
        </Container>
    )
}

export default LastRegister

const styles = StyleSheet.create({})
