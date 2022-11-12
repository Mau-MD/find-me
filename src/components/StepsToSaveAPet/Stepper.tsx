import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Steps() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="Primero" description="Toma fotos de la mascota" allowStepSelect={active > 0}>
                    Primer paso: Asegurate de tomar fotos del perro para poder integrarlas a tu publicación
                </Stepper.Step>
                <Stepper.Step label="Después" description="Intenta acercarte" allowStepSelect={active > 1}>
                    Paso dos: Solo si el perro es docil acercate e intentar rescatarlo
                </Stepper.Step>
                <Stepper.Step label="Crear post" description="Publica que lo encontraste" allowStepSelect={active > 2}>
                    Paso tres: Si no pudiste acercarte, al menos intenta dar todos los detalles posibles.
                </Stepper.Step>
                <Stepper.Step label="Por último" description="Espera e intentar ponerte en contacto" allowStepSelect={active > 3}>
                    Revisa si hay publicaciones de perros extraviados que se parezcan
                </Stepper.Step>
                <Stepper.Completed>
                Muchas gracias por ayudar a la comunidad de FindMe!
                </Stepper.Completed>
            </Stepper>

            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </>
    );
}
export default Steps;