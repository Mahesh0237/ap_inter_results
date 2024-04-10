import React from 'react'
import { Button, Container, Divider, Grid, Group, Image, Stack, Table, Tabs, Text, TextInput } from '@mantine/core'
import logo from '../assets/logo.png'
import { IconScreenshot } from '@tabler/icons-react'
import InterFirstYearResults from '../components/InterFirstYearResults'
import InterSecondYearResults from '../components/InterSecondYearResults'
function Interresultspage() {
    return (
        <Container pt={20} px={30}>
            <Stack gap={10}>
                <Text c='white' style={{ fontSize: "17.21px", fontWeight: "700", lineHeight: "20.83px" }}>
                    <Text component='span' c="#E98918" style={{ fontSize: "17.21px", fontWeight: "700", lineHeight: "20.83px" }}>
                        AP ఇంటర్
                    </Text> పరీక్ష ఫలితాలు
                </Text>
                <Group mt={10} gap={0}>
                    <TextInput
                        placeholder='Enter Hall Ticket No'
                        radius={0}
                    />
                    <Button color='#1353B2' style={{ borderRadius: "0px 15px 15px 0px" }}>
                        Submit
                    </Button>
                </Group>
                <Group >
                    <Stack gap={2}>
                        <Text c="#ADA5A5" fw={700} size='md'>Hall Ticket &nbsp;:</Text>
                        <Text c="#ADA5A5" fw={700} size='md'>Name &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;:</Text>
                        <Text c="#ADA5A5" fw={700} size='md'>Total &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;:</Text>
                    </Stack>
                    <Stack gap={2}>
                        <Text c="white" fw={700} size='md'>1404214987 </Text>
                        <Text c="white" fw={700} size='md'>Subrahmanyam</Text>
                        <Text c="white" fw={700} size='md'>351 <Text c="#47A71A" component='span' fw={700} >(Pass/A)</Text></Text>
                    </Stack>
                </Group>
                <Divider color='#4E4E4E' size={2} />
                <Group >
                    <Group gap={5}>
                        <Text c="white" style={{ fontSize: "12px", fontWeight: "700", lineHeight: "20.83px" }}>ఇంటర్</Text>
                        <Text c="#E98918" style={{ fontSize: "12px", fontWeight: "700", lineHeight: "20.83px" }}>ఫలితాల కోసం డౌన్లోడ్</Text>
                    </Group>
                    <Image src={logo} alt='logo' h={40} w="auto" />
                </Group>
                <Tabs color='#fe0303' defaultValue="1styear">
                    <Tabs.List>
                        <Tabs.Tab value="1styear" >
                            <Text c="white">1st Year</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="2nd Year" >
                            <Text c="white" size='sm'> 2nd Year</Text>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="1styear" mt={30}>
                        <InterFirstYearResults />
                    </Tabs.Panel>

                    <Tabs.Panel value="2nd Year" mt={30}>
                        <InterSecondYearResults />
                    </Tabs.Panel>
                </Tabs>
                <Group justify='center'>
                    <Button color="#3F4146" mb={20}>
                        <Text size='sm'><IconScreenshot /> Take a Screenshot</Text>
                    </Button>
                </Group>
            </Stack>
        </Container>
    )
}

export default Interresultspage