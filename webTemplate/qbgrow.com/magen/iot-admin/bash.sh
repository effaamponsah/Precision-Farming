#!/bin/sh


#the statement below puts the temp from ming and puts it into lov.
#it is form the lov that we will feed the flask app with

#similar implementation can be done for the other columns and the other sensors

while true;do
<<<<<<< HEAD
    echo "Reading DATA"
    tail -60 collector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/atmp1h.embs
    tail -1440 collector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/atmp24h.embs    
    tail -10080 collector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/atmp1w.embs    
    tail -60 soilTempCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/stmp1h.embs 
    tail -1340 soilTempCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/stmp24h.embs 
    tail -10080 collector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/stmp1w.embs    
    tail -60 humidityCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/humidity1h.embs 
    tail -1440 humidityCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/humidity24h.embs 
    tail -10080 collector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/humidity1w.embs
    tail -60 moistureCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/moisture1h.embs
    tail -1440 moistureCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/moisture24h.embs
    tail -10080 moistureCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/moisture1w.embs
    
 sleep 10
=======
    echo "Reading Temp"
    tail -20 collector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/atmp1h.embs
    tail -20 soilTempCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/stmp1h.embs 
    tail -20 humidityCollector.txt | awk '{printf substr($4,1,5) " \t"  $6 " \n"}' > ./readings/humidity1h.embs 
    sleep 60
>>>>>>> 17238407395f85472e9bf997d1904c86efa14906
done
