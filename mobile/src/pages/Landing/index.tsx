import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import hearthIcon from '../../assets/images/icons/heart.png'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

function Landing(){
    const {navigate} = useNavigation()

    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses')
    }

    function handleNavigateToStudyPages(){
        navigate('Study')
    }
        return(
            <View style={styles.container}>
                <Image source={landingImg} style={styles.banner}/>
    
                <Text style={{...styles.title, fontFamily:'Poppins_400Regular'}}>
                    Seja bem-vindo, {"\n"}
                    <Text style={{fontFamily:'Poppins_600SemiBold'}}>O que deseja fazer?</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={[styles.button,styles.buttonPrimary]}
                        onPress={handleNavigateToStudyPages}
                    >
                        <Image source={studyIcon} style={{justifyContent:'center'}}/>
                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>

                    <RectButton
                        onPress={handleNavigateToGiveClassesPage}
                        style={[styles.button,styles.buttonSecondary]}
                    >
                        <Image source={giveClassesIcon}/>
                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>
                </View>

                <Text style={styles.totalConnections}>
                    Total de 0 conexões realizadas{' '}<Image source={hearthIcon}></Image>
                </Text>
            </View>
        )
}

export default Landing