import React from "react"
import { Text, View, StyleSheet, TouchableOpacity, Share } from "react-native"

export default function ResultBMI(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: `My BMI today is: ${props.resultBMI}`
        })
    }

    return(
        <View style={styles.resultBMI}>
            <View style={styles.boxShareButton}>
                {props.resultBMI != null ?
                    <TouchableOpacity 
                        onPress={onShare}
                        style={styles.shared}
                    >
                        <Text style={styles.sharedText}>Share</Text>
                    </TouchableOpacity>
                    :
                        <View/>
                }
            </View>
            <Text style={styles.infotmation}>{props.messageResultBMI}</Text>
            <Text style={styles.numberBMI}>{props.resultBMI}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultBMI: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    infotmation: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
    numberBMI: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared: {
        backgroundColor: "#1877F2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
    },
    sharedText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
})