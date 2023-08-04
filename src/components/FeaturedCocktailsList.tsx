import { StyleSheet, Text, View } from 'react-native'
import { Cocktail } from '@/types'

type CocktailsListProps ={
    post: Cocktail;
}

const FeaturedCocktailsList = ({post}: CocktailsListProps) => {

    
  return (
    <View>
      <Text>{post.content}</Text>
    </View>
  )
}

export default FeaturedCocktailsList

const styles = StyleSheet.create({})