import { Text, View, Image, StyleSheet, Pressable, ScrollView } from "react-native"
import { useLocalSearchParams, useNavigation } from "expo-router"
import userJson from '../../../assets/data/user.json'
import { useLayoutEffect, useState } from "react"
import { User } from "@/types"
import ExperienceListItemt from "@/components/ExperienceListItem"

export default function UserProfile() {

    const [user, setUser] = useState<User>(userJson)
    const navigation = useNavigation();

    const { id } = useLocalSearchParams();


    function onConnect() {
        console.warn('Connected Pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({ title: user.name })

    }, [user?.name])


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image source={{ uri: user.backImage }} style={styles.backImage} />
                <View style={styles.headerContent}>
                    <Image source={{ uri: user.image }} style={styles.image} />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.position}>{user.position}</Text>

                    <Pressable onPress={() => onConnect()} style={styles.button}>
                        <Text style={styles.buttonText}>Connect</Text>
                    </Pressable>

                </View>

            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.paragraph}>{user.about}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>

                {
                    user.experience?.map(exp=> <ExperienceListItemt key={exp.id} experience={exp}/>)
                }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
    header: {
        backgroundColor: 'white' 
    },
    headerContent: {
        padding: 10,
        paddingTop: 10,

    },
    backImage: {
        width: '100%',
        aspectRatio: 3 / 1,
        marginBottom: -60
    },
    image: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: 'white'
    },
    name: {
        fontSize: 24,
        fontWeight: '500'
    },
    position: {},
    button: {
        backgroundColor: 'royalblue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: '600'
    },
    section: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        amrginVertical: 5
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 1.2
    }
});