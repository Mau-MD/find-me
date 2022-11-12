import { Card, Group, Image, Text, Badge, Button, Flex } from "@mantine/core";
import React from "react";
import PerroCarousel from "../components/perroPerdidoPerfil/Carousel";

const Profile = () => {
    return (
        <>
            <Group position="center">
                <Flex
                direction={ "column" }
                justify="center"
                align="center">
                    <h1>Nombre</h1>
                    <div style={{ width: "100vh", height: "100vh"}}>
                        <Flex
                            gap="lg"
                            justify="space-between"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <PerroCarousel />
                        </Flex>
                    </div>
                </Flex>
            </Group>
        </>
    )
}

export default Profile;