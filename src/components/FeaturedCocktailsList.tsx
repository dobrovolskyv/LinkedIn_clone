import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Cocktail } from '@/types'
import { SimpleLineIcons} from '@expo/vector-icons';


type CocktailsListProps = {
    post: Cocktail;
}

type FooterButtonProps = {
  text: string,
  icon: string,
}

function FooterButton({text, icon}: FooterButtonProps){
  return (
    <View style={{flexDirection: 'row'}}>
    <SimpleLineIcons name={icon} size={16} color="gray" />
    <Text style={{marginLeft: 10}}>{text}</Text>
</View>
  )
}

const FeaturedCocktailsList = ({post}: CocktailsListProps) => {

    
  return (
    <View style={styles.container}>
      {/* header */}
      <View>
        <Text style={styles.title}>{post.cocktail.name}</Text>
        <Text >{post.cocktail.position}</Text>
        {post.cocktail.image && (
            <Image source={{uri: post.cocktail.image}} style={styles.img}/>
            )}
       
      </View>

      <Text>{post.content}</Text>

      <View style={styles.footer}>
          <FooterButton text="Likes" icon="like"/>
          <FooterButton text="Comments" icon="compass"/>
          <FooterButton text="share" icon="share"/>
          
      </View>

    </View>
  )
}

export default FeaturedCocktailsList

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: "100%",
    paddingHorizontal: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  img: {
    width: 300,
    height: 400,
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 0.6,
    borderColor: 'lightgray'
    
  }
})