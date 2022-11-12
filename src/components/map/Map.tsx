import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { Loader } from "@mantine/core";

const GMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRbZkLZZYFiPYAJjSm6wE6k8QCs2PyDG0" || "",
  });

  const [currentLocation, setCurrentLocation] =
    useState<GeolocationPosition | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => setCurrentLocation(pos));
  }, []);

  if (!isLoaded || !currentLocation) {
    return <Loader />;
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
        label="hola"
      />
    </GoogleMap>
  );
};

export default GMap;
