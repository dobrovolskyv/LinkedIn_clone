import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import FeaturedCocktailsList from '@/components/FeaturedCocktailsList';

import fCocktail from "../../../assets/data/featuredCocktailsData.json"


const firstPost = fCocktail[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      <FeaturedCocktailsList post={firstPost}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
