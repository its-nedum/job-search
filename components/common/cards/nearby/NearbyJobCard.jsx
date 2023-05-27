import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL, dummyCompanyLogo } from '../../../../utils';

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      key={`nearby-job-${job?.job_id}`}
      style={styles.container}
      onPress={() => handleNavigate()}
    >
      <TouchableOpacity
        style={styles.logoContainer}
      >
        <Image 
          source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : dummyCompanyLogo }}
          resizeMode={"contain"}
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text 
          style={styles.jobName}
          numberOfLines={1}
          >
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard