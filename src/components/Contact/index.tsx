import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";
import React, { FC } from "react";
import Style from "./style.module.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

interface ContactProps {
    title: RichTextField;
    description: RichTextField;
}
interface IProps {
    name: string;
    phone: string;
    mail: string;
    message: string;
}

const schema = object({
    name: string().required("Veuillez remplir ce champ"),
    phone: string().nullable(false).required("Veuillez remplir ce champ"),
    mail: string()
        .nullable(false)
        .email("Format invalide")
        .required("Veuillez remplir ce champ"),

    message: string().nullable(false).required("Veuillez remplir ce champ"),
});

const Contact: FC<ContactProps> = ({ title, description }) => {
    const toast = useToast();
    const { handleSubmit, control, formState, reset } = useForm<IProps>({
        mode: "all",
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            phone: "",
            mail: "",
            message: "",
        },
    });
    const onSubmit: SubmitHandler<IProps> = async (data) => {
        const mailData = {
            subject: `Olistik Laser - Demande de contact`,
            from: `Webmaster Olistik Laser - <webmaster@olistik.ch>`,
            to: "contact@olistik.ch",
            replyTo: data.mail,
            text: data.message,
            html: `<div>
              <p>name: ${data.name}</p>
              <p>phone: ${data.phone}</p>
              <p>email: ${data.mail}</p>
              <p>message: ${data.message}</p>
            </div>${EMAILSIGNATURE}`,
        };
        const contactResposne = await fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mailData),
        });

        if (contactResposne.status === 200) {
            toast({
                position: "bottom",
                status: "success",
                duration: 2000,
                isClosable: true,
                title: `Fomulaire envoyé avec success.`,
            });
            reset();
        } else {
            toast({
                position: "bottom",
                status: "error",
                duration: 2000,
                isClosable: true,
                title: `Echec d'envoi.`,
            });
        }
    };
    return (
        <section id={"contact"} className={`container ${Style.contactWrapper}`}>
            <div className={` ${Style.contactHeader}`}>
                <PrismicRichText field={title} />
            </div>
            <div className={` ${Style.dataWrapper}`}>
                <div className={`${Style.LeftSide}`}>
                    <PrismicRichText field={description} />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`${Style.RightSide}`}
                >
                    <VStack spacing={5}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FormControl
                                    isInvalid={!!fieldState.error}
                                    isRequired
                                >
                                    <FormLabel>Votre Nom</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={
                                                <BsPerson color="gray.500" />
                                            }
                                        />
                                        <Input
                                            focusBorderColor={"black"}
                                            type="text"
                                            size="md"
                                            {...field}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {fieldState.error?.message}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FormControl
                                    isInvalid={!!fieldState.error}
                                    isRequired
                                >
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
                                            {...field}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {fieldState.error?.message}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        />
                        <Controller
                            name="mail"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FormControl
                                    isInvalid={!!fieldState.error}
                                    isRequired
                                >
                                    <FormLabel>Adresse Mail</FormLabel>
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
                                            {...field}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {fieldState.error?.message}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        />
                        <Controller
                            name="message"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FormControl
                                    isInvalid={!!fieldState.error}
                                    isRequired
                                >
                                    <FormLabel>Message</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none" />
                                        <Textarea
                                            borderColor="gray.300"
                                            focusBorderColor={"black"}
                                            rows={5}
                                            {...field}
                                            _hover={{
                                                borderRadius: "gray.300",
                                            }}
                                            placeholder="message"
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {fieldState.error?.message}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        />
                        <FormControl float="right">
                            <Button
                                disabled={!formState.isValid}
                                type="submit"
                                name="submit-form"
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

const EMAILSIGNATURE = ``;
