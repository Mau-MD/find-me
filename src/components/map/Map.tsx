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
import { posts } from "../../server/trpc/router/getPost";
import { differenceInHours } from "date-fns";
import { IconWorldLatitude } from "@tabler/icons";

interface Props {
  posts: PostsPerdidoWithUser[];
  visto: boolean;
  containerClass?: string;
  center?: { latitud: number; longitud: number };
}
const GMap = ({
  posts,
  visto,
  containerClass,
  center = { latitud: 31.87326329663515, longitud: -116.6459030853411 },
}: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRbZkLZZYFiPYAJjSm6wE6k8QCs2PyDG0" || "",
  });

  const [currentLocation, setCurrentLocation] = useState<{
    latitud: number;
    longitud: number;
  }>(center);

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
      mapContainerClassName={containerClass || "map-container"}
    >
      {posts &&
        posts.map((post) => (
          <MarkerClicked post={post} key={post.id} visto={visto} />
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
  visto: boolean;
}
const MarkerClicked = ({ post, visto }: MarkerProps) => {
  const [radio, setRadio] = useState(50);

  useEffect(() => {
    const thirytMins = [
      "affenpinscher",
      "akita",
      "brabancon",
      "bulldog",
      "chihuahua",
      "collie",
      "cotondetulear",
      "dachshund",
      "entlebucher",
      "frise",
      "greyhound",
      "labrador",
      "leonberg",
      "lhasa",
      "maltese",
      "papillon",
      "pekinese",
      "schnauzer",
      "shihtzu",
      "terrier",
    ];
    const oneHour = [
      "affrican",
      "basenji",
      "borzoi",
      "bouvier",
      "bullterrier",
      "chow",
      "clumber",
      "cockapoo",
      "coonhound",
      "corgi",
      "dane",
      "deerhound",
      "dhole",
      "eskimo",
      "finnish",
      "germanshepherd",
      "havanese",
      "hound",
      "keeshond",
      "kelpie",
      "kuvasz",
      "labradoodle",
      "mastiff",
      "mexicanhairless",
      "pinscher",
      "pitbull",
      "poodle",
      "pug",
      "puggle",
      "redbone",
      "ridgeback",
      "rottweiler",
      "segugio",
      "setter",
      "spaniel",
      "springer",
      "waterdog",
      "whippet",
    ];
    const twoHours = [
      "airedale",
      "appenzell",
      "australian",
      "beagle",
      "bluetick",
      "boxer",
      "briard",
      "cattledog",
      "dalmatian",
      "dingo",
      "doberman",
      "elkhound",
      "golden",
      "groenendael",
      "husky",
      "komondor",
      "malamute",
      "malinois",
      "mix",
      "mountain",
      "newfoundland",
      "otterhound",
      "ovcharka",
      "pembroke",
      "pointer",
      "pomeranian",
      "pyrenees",
      "retriever",
      "saluki",
      "samoyed",
      "schipperke",
      "sharpei",
      "sheepdog",
      "shiba",
      "stbernard",
      "tervuren",
      "vizsla",
      "weimaraner",
      "wolfhound",
    ];

    var strength = 1;

    if (post.raza in thirytMins) {
      var strength = 0.5 * 5;
    } else if (post.raza in oneHour) {
      var strength = 1 * 7;
    } else if (post.raza in twoHours) {
      var strength = 2 * 10;
    }
    var now = new Date();
    //var differenceInHours = require('date-fns/differenceInHours')
    //differenceInHours(now, post.fecha)
    var fRadio = (strength * differenceInHours(now, post.fecha)) / 2;
    if (fRadio > 500) {
      fRadio = 500;
    }
    setRadio(fRadio * 100);
  }, []);

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <MarkerF
        position={{
          lat: post.latitud,
          lng: post.longitud,
        }}
        options={{
          icon: visto
            ? "https://i.imgur.com/cXq32r2.png"
            : "https://i.imgur.com/UJcpuoX.png",
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
            <MapCard post={post} visto={visto} />
          </InfoWindowF>
          <CircleF
            radius={radio}
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
          <CircleF
            radius={radio / 2}
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
