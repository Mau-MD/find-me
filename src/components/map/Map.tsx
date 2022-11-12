import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { Center, Loader } from "@mantine/core";
import SearchCard from "../busqueda/SearchCard";
import MapCard from "./MapCard";

const GMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRbZkLZZYFiPYAJjSm6wE6k8QCs2PyDG0" || "",
  });

  const [currentLocation, setCurrentLocation] =
    useState<GeolocationPosition | null>(null);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => setCurrentLocation(pos));
  }, []);

  if (!isLoaded) {
    return (
      <Center w={"100%"}>
        <Loader />
      </Center>
    );
  }

  if (!currentLocation) {
    return (
      <Center w={"100%"} color="orange">
        <Loader />
      </Center>
    );
  }

  return (
    <GoogleMap
      zoom={15}
      center={{
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude,
      }}
      mapContainerClassName="map-container"
    >
      <MarkerF
        position={{
          lat: currentLocation.coords.latitude,
          lng: currentLocation.coords.longitude,
        }}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && (
        <InfoWindowF
          position={{
            lat: currentLocation.coords.latitude + 0.001,
            lng: currentLocation.coords.longitude,
          }}
        >
          <MapCard />
        </InfoWindowF>
      )}
      {/* <MarkerF
        position={{
          lat: currentLocation.coords.latitude,
          lng: currentLocation.coords.longitude,
        }}
        label="hola"
      /> */}
    </GoogleMap>
  );
};

export default GMap;
