import {FlatList, Image, StyleSheet,Text,View } from 'react-native';
import { BasePageWrapper } from '../components';
import * as Constands from '../consts';
import RecoCard from '../components/pages/food/home/RecoCard';
import { MOCHA_APP_DATA } from '../consts';
import { GenerateRandomKey} from '../utils';

export default function App() {

  const HEADER_TITLE = "SEARCH";
  const HEADER_SUBTITLLE = "for recipes";
  const RECOMMENDED = "Recommended";
 
  return (
     
     <BasePageWrapper contentStyle={{paddingHorizontal: Constands.SPACING.md}}>
        <>
          <View style={styles.header}>
             <View style={styles.headerTextContainer}>
                <Text style={{...Constands.TYPOGRAPHY.heading}} numberOfLines={1}>{HEADER_TITLE}</Text>
                <Text style={Constands.TYPOGRAPHY.subheading} numberOfLines={1}>{HEADER_SUBTITLLE}</Text>
             </View>
               <Image 
                  source={{uri: 'https://picsum.photos/200'}}
                  style={styles.headerProfileImage}
               />
          </View>
          <View style={styles.recoContentainer}>
           <Text style={Constands.TYPOGRAPHY.contentTitle}>{RECOMMENDED}</Text>
           <FlatList 
             data={[1,2,3,4,5,6,7,8,9,10]}
             keyExtractor={(index) => GenerateRandomKey.generateKey()}
             horizontal
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{columnGap: Constands.SPACING.sm}}
             renderItem={({item}) => (
                  <RecoCard time={MOCHA_APP_DATA.recipe.total_time} img='https://picsum.photos/200' itemSize={MOCHA_APP_DATA.recipe.ingredients.length} title={MOCHA_APP_DATA.recipe.name}/>
             )}
           />
          </View>
        </>
     </BasePageWrapper>
  
 );
}

const styles = StyleSheet.create({
    header:{
       width:"100%",
       columnGap:Constands.SPACING.sm,
       minHeight:60,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between",
       marginBottom:Constands.SPACING.lg
    },
    headerTextContainer: {
       flex:1,
       alignItems:"flex-start",
    },
    headerProfileImage: {
       width: 50,
       height: 50,
       borderRadius: Constands.BORDER_RADIUS.circle,
    },
    recoContentainer: {
       width:"100%",
       marginBottom:Constands.SPACING.lg,
       rowGap:Constands.SPACING.md,
    }
});
