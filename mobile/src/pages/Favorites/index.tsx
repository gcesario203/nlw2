import React from 'react'
import { View } from 'react-native'
import PageHeader from '../../components/PageHeader'

import styles from './styles'

function Favorites(){
    return (
        <View style={styles.containter}>
            <PageHeader title="Meus Proffys favoritos"></PageHeader>
        </View>
    )
}

export default Favorites