import React, { useEffect } from 'react';
import { geolocated } from "react-geolocated";

import { useSelector } from 'react-redux';
import { withRedux } from '../src/lib/redux';
import { useDispatch } from 'react-redux';

import Header from '../src/components/header'
import Container from '../src/components/Shared/Container';
import Map from '../src/components/Map';
import GeolocationMap from '../src/components/GeolocationMap';
import {  Flex, useToast  } from '@chakra-ui/core';
import locationMap from '../public/locations.json'

const useLocation = () => {

  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });

  const badges = useSelector((state) => ({...state.badges}));
  return { badges, setBadge };
};


const Location = ({coords}) => {
  
  //alert(coords);

  const { badges, setBadge } = useLocation();
  const toast = useToast();
  const locations = locationMap;
  const locationAccuracy = 0.0003;

  if(coords){
  const { latitude, longitude } = coords;
  locations.forEach(location => {
    if(Math.abs(location.longitude - longitude) < locationAccuracy && Math.abs(location.latitude - latitude) < locationAccuracy){
      if(!badges.radar){
        setBadge('radar', true);
        toast({
          title: "\"Navigator\" Badge Earned!",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
    }
  });
  }

  return (
  <Container>
  <Header 
  school = "Iowa State University" 
  color = "red.500"
  image ="https://www.commonapp.org/static/b0b82a6b48ae23b1665cd5deda0bc94e-249d7ea8a511a7d0d7591e9c679fe8b8.jpg"
  logo = "https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/f/b3/fb3cbf90-8c20-11e7-bab3-9bc829bc7696/59a464a6003b6.image.png"
  isulink = "https://www.iastate.edu/"
  namecolor = "gold"


  name = "Alex Domowicz" 
  colorP = "#63EEFB"
  imageP ="https://miro.medium.com/max/870/0*ojIU84VO1XMGIn6_.jpg"
  profilepic = "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s320x320/104679719_2657802991155987_2364922306048170001_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=4mvltfcxIiEAX-XfBmP&oh=0873fc4a44ee7b3013e9e6c52e4937fc&oe=5F806A0E"
  namecolorP = "#000000"


  nameF = "Simanta Mitra"
  profilepicF = "https://www.engineering.iastate.edu/people/files/2020/01/mitra.jpg"
  colorF = "#FFEC0B"

  type = "location"
/>
<Flex display="block" width="100vw" h="60vh" bg="yellow.500">
  <Map mapStyle="mapbox://styles/mapbox/satellite-v9" geolocate="true"/>
</Flex>

</Container>
)};


export default geolocated({
  positionOptions: {
      enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(withRedux(Location));