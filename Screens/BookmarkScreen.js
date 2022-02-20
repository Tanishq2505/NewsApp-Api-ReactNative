import React, {useState} from 'react'
import { View, Text, Button, TouchableOpacityBase, TouchableOpacity } from 'react-native'

const BookmarkScreen = () => {
    const [loggedIn, setLoggedIn] = useState(0)

    function loginCheck(){
        return 0
    }
    function login(){
        if(loggedIn){
            setLoggedIn(0)
        }else setLoggedIn(1)
    }
    loginCheck();
    return (
        <View>
            {!loggedIn?(
                <View>
                <Text>Hello 1</Text>
                <TouchableOpacity onPress={()=>login()}>
                    <Text>Login</Text>
                </TouchableOpacity>
                </View>
            ):(
                <View>
                <Text>Hello 2</Text>
                <TouchableOpacity onPress={()=>login()}>
                    <Text>SignOut</Text>
                </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default BookmarkScreen
