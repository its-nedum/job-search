import { useState } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image
 } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style';


const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [jobTypes] = useState([
    { id: 1, type: "Full-Time" },
    { id: 2, type: "Part-Time" },
    { id: 3, type: "Contractor" },
    { id: 4, type: "Remote" }
  ]);
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Chinedu,</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              placeholder={"What are you looking for?"}
            />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode={"contain"}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item.type)}
              onPress={() => {
                setActiveJobType(item.type);
                router.push( `/search/${item.type}`)
              }}
            >
              <Text>{item.type}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome