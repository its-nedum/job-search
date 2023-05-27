import React, { useState } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator, 
  FlatList 
} from 'react-native'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { SIZES } from '../../../constants'
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState()
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    page: '1',
    num_pages: '1'
  });

const handleCardPress = (job) => {
  router.push(`/job-details/${job?.job_id}`)
  setSelectedJob(job.job_id)
}

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
          <Text style={styles.headerTitle}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? 
          (
            <ActivityIndicator />
          )
          : error ? 
          (
            <Text>Something went wrong while fetching jobs!</Text>
          )
          :
          (
            <FlatList 
              data={data}
              keyExtractor={(item) => item.job_id}
              renderItem={({ item }) => (
                <PopularJobCard 
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs