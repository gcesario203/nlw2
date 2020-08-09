import React from 'react'
import { View , Text , Image} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri:'https://github.com/gcesario203.png'}}
                >
                </Image>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        Gabriel Cesario
                    </Text>
                    <Text style={styles.subject}>
                        História
                    </Text>
                </View>
            </View>
            <Text style={styles.bio}>
                    Explicando por que não ser como eu
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'    '}
                    <Text style={styles.priceValue}>
                        R$ 20.00
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={{...styles.favorite,...styles.favorited}}>
                        {/* <Image source={heartOutlineIcon}></Image> */}
                        <Image source={unfavoriteIcon}></Image>
                    </RectButton>

                    <RectButton style={styles.contact}>
                        <Image source={whatsappIcon}></Image>
                        <Text style={styles.contactText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem