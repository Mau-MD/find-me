import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
  InfoWindowF,
  CircleF,
} from "@react-google-maps/api";
import { Center, Loader } from "@mantine/core";
import SearchCard from "../busqueda/SearchCard";
import MapCard from "./MapCard";
import { PostsPerdidoWithUser } from "../../pages/busqueda";

interface Props {
  posts: PostsPerdidoWithUser[];
}
const GMap = ({ posts }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRbZkLZZYFiPYAJjSm6wE6k8QCs2PyDG0" || "",
  });

  const [currentLocation, setCurrentLocation] = useState<{
    latitud: number;
    longitud: number;
  }>({ latitud: 31.87326329663515, longitud: -116.6459030853411 });

  const [clicked, setClicked] = useState(false);

  if (!isLoaded) {
    return (
      <Center w={"100%"}>
        <Loader color={"orange"} />
      </Center>
    );
  }

  return (
    <GoogleMap
      zoom={15}
      center={{
        lat: currentLocation.latitud,
        lng: currentLocation.longitud,
      }}
      mapContainerClassName="map-container"
    >
      {posts.map((post) => (
        <MarkerClicked post={post} key={post.id} />
        // <MarkerF
        //   position={{
        //     lat: post.latitud,
        //     lng: post.longitud,
        //   }}
        //   onClick={() => setClicked(!clicked)}
        // />
        // {clicked && (
        //   <InfoWindowF
        //     position={{
        //       lat: currentLocation.coords.latitude + 0.001,
        //       lng: currentLocation.coords.longitude,
        //     }}
        //   >
        //     <MapCard />
        //   </InfoWindowF>
        // )}
      ))}
    </GoogleMap>
  );
};

interface MarkerProps {
  post: PostsPerdidoWithUser;
}
const MarkerClicked = ({ post }: MarkerProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <MarkerF
        position={{
          lat: post.latitud,
          lng: post.longitud,
        }}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && (
        <>
          <InfoWindowF
            position={{
              lat: post.latitud + 0.001,
              lng: post.longitud,
            }}
          >
            <MapCard post={post} />
          </InfoWindowF>
          <CircleF
            radius={1000}
            options={{
              strokeColor: "blue",
              fillColor: "blue",
              fillOpacity: 0.1,
            }}
            center={{
              lat: post.latitud,
              lng: post.longitud,
            }}
          />
        </>
      )}
    </>
  );
};
export default GMap;
