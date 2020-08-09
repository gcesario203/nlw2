import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View , ImageBackground, Text} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses(){

    const {goBack} = useNavigation()

    function handleNavigateToLanding(){
        goBack()
    }
    return(
        <View style={styles.container}>
            <ImageBackground
                source={giveClassesBgImage}
                style={styles.content}
                resizeMode='contain'
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor em nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateToLanding} style={styles.okButton}>
                <Text style={styles.okButtontext}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses