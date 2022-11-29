import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
const myImage = require('../../assets/IDCardCartoon.jpg');
// C:\fsd\Log-in Test App\local-auth-fsd\assets\IDCardCartoon.jpg
// assets\IDCardCartoon.jpg

export default function Auth({onAuthenticate}) {
    return(
        <View>
            <Image source={myImage} style={styles.image}/>
            <Text style={styles.title}>DIGIWALLET</Text>
            <Text style={styles.description}>Easy ID at the touch of a button</Text>
            <TouchableOpacity 
                onPress={onAuthenticate}
                style={styles.btn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        borderRadius: 15,
    },
    image: {
        width: 390,
        height: 461,
        alignSelf: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 50,
        fontWeight: '400',
        marginVertical: 30,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
    }
})