import React from 'react';
import {View , StyleSheet} from 'react-native';

const Card = props => {
    return(
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowRadius:6,
        shadowOffset: {width:0,height:2},
        elevation:8,
        backgroundColor:'white',
        marginBottom:40
    }
});

export default Card;