import React from 'react'
import { View ,Image, Text} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

import styles from './styles'
import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps{
    title:string,
}

const PageHeader: React.FC<PageHeaderProps> =({title,children})=>{
    const {navigate} = useNavigation()
    function handleGoBack(){
        navigate('Landing')
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain'></Image>
                </BorderlessButton>

                <Image source={logoIcon} resizeMode='contain'>
                </Image>
            </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default PageHeader