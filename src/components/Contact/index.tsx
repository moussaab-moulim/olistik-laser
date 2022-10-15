import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";
import React, { FC } from "react";
import Style from "./style.module.scss";

interface ContactProps {
    title: RichTextField;
    description: RichTextField;
}

const Contact: FC<ContactProps> = ({ title, description }) => {
    return (
        <section id={"contact"} className={`container ${Style.contactWrapper}`}>
            <div className={` ${Style.contactHeader}`}>
                <PrismicRichText field={title} />
            </div>
            <div className={` ${Style.dataWrapper}`}>
                <div className={`${Style.LeftSide}`}>
                    <PrismicRichText field={description} />
                </div>
                <form className={`${Style.RightSide}`}>
                    <VStack spacing={5}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Votre Nom</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<BsPerson color="gray.500" />}
                                />

                                <Input
                                    focusBorderColor={"black"}
                                    type="text"
                                    size="md"
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name" isRequired>
                            <FormLabel>Téléphone</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={
                                        <MdOutlinePhone color="gray.500" />
                                    }
                                />
                                <Input
                                    focusBorderColor={"black"}
                                    type="text"
                                    size="md"
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name" isRequired>
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={
                                        <MdOutlineEmail color="gray.500" />
                                    }
                                />
                                <Input
                                    focusBorderColor={"black"}
                                    type="text"
                                    size="md"
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                borderColor="gray.300"
                                focusBorderColor={"black"}
                                rows={5}
                                _hover={{
                                    borderRadius: "gray.300",
                                }}
                                placeholder="message"
                            />
                        </FormControl>
                        <FormControl id="name" float="right">
                            <Button
                                variant="solid"
                                borderRadius={0}
                                bg="#f8e0de"
                                color="black"
                                fontSize={13}
                                _hover={{
                                    backgroundColor: "#f4ccc9",
                                }}
                            >
                                Envoyer Le Message
                            </Button>
                        </FormControl>
                    </VStack>
                </form>
            </div>
        </section>
    );
};

export default Contact;
