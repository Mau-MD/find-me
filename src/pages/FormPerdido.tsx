import { Center, Group, Grid } from "@mantine/core";
import React from "react";

const formPerdidos = () => {
    return (
        <>
            <Group position="center">
                <h1>Encuentra tu mascota</h1>
            </Group>
            <Grid style={{ border: "1px solid black" }}>
                <Grid.Col span={4}>hola</Grid.Col>
                <Grid.Col span={4}>Adios</Grid.Col>
            </Grid>
        </>
    );
};

export default formPerdidos;