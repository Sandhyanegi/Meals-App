import { Pressable,View,Text,StyleSheet,Platform} from "react-native";

function CategoryGridTile({title,color}){

    return <View style = {Styles.gridItem} >
        <Pressable  style = {( {pressed} ) => [Styles.button , pressed ? Styles.buttonPressed : null] } android_ripple = {{color:'#ccc'}}>
            <View style = {[Styles.innerContainer, {backgroundColor:color}]}>
                <Text style = {Styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const Styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        // overflow: Platform.OS ==="android " ? "hidden" : 'visible',
        elevation: 4,
        //android
        shadowColor:'black',
        //ios
        backgroundColor:'white',
        shadowOpacity:0.25,
        shadowRadius:6,
        shadowOffset:{width:0,height:2}, 
    },

    button: {
        flex:1,
    },

    buttonPressed:{
        opacity:0.5,
    },

    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,

    },

    title:{

        fontWeight: 'bold',
        fontSize:18,

    },
})