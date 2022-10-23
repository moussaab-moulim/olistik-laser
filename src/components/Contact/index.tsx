import React, { FC } from "react";
import Style from "./style.module.scss";

import toast, { Toaster } from "react-hot-toast";
import { BsCheckCircleFill, BsPerson, BsXCircleFill } from "react-icons/bs";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";

import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";

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
            toast.success("Fomulaire envoyé avec success.");
            reset();
        } else {
            toast.error("Echec d'envoi.");
        }
    };
    return (
        <section id={"contact"} className={`container ${Style.contactWrapper}`}>
            <Toaster
                position="bottom-center"
                toastOptions={{
                    // Sucess Toast
                    success: {
                        duration: 4000,
                        className: `${Style.SuccessToast}`,
                        icon: <BsCheckCircleFill size={20} color="white" />,
                    },
                    // Error Toast
                    error: {
                        duration: 4000,
                        className: `${Style.ErrorToast}`,
                        icon: <BsXCircleFill size={20} color="white" />,
                    },
                }}
            />
            <div className={` ${Style.dataWrapper}`}>
                <div className={`${Style.LeftSide}`}>
                    <div className={` ${Style.contactHeader}`}>
                        <PrismicRichText field={title} />
                    </div>
                    <PrismicRichText field={description} />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`${Style.RightSide}`}
                >
                    <div className={` ${Style.FormContainer}`}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field, fieldState }) => (
                                <div className={` ${Style.InputGroup}`}>
                                    <label
                                        className={` ${Style.InputLabel}`}
                                        htmlFor="name"
                                    >
                                        Votre Nom
                                        <span style={{ color: "#E53E3E" }}>
                                            {" "}
                                            *
                                        </span>
                                    </label>
                                    <div className={` ${Style.InputField}`}>
                                        <BsPerson color="gray.500" />
                                        <input
                                            id="name"
                                            type="text"
                                            {...field}
                                            className={`${
                                                fieldState.invalid &&
                                                Style.InputError
                                            }`}
                                        ></input>
                                    </div>
                                    <div className={` ${Style.ErrorMessage}`}>
                                        {fieldState.error?.message}
                                    </div>
                                </div>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field, fieldState }) => (
                                <div className={` ${Style.InputGroup}`}>
                                    <label
                                        className={` ${Style.InputLabel}`}
                                        htmlFor="phone"
                                    >
                                        Téléphone
                                        <span style={{ color: "#E53E3E" }}>
                                            {" "}
                                            *
                                        </span>
                                    </label>
                                    <div className={` ${Style.InputField}`}>
                                        <MdOutlinePhone color="gray.500" />
                                        <input
                                            id="phone"
                                            type="text"
                                            {...field}
                                            className={`${
                                                fieldState.invalid &&
                                                Style.InputError
                                            }`}
                                        ></input>
                                    </div>
                                    <div className={` ${Style.ErrorMessage}`}>
                                        {fieldState.error?.message}
                                    </div>
                                </div>
                            )}
                        />
                        <Controller
                            name="mail"
                            control={control}
                            render={({ field, fieldState }) => (
                                <div className={` ${Style.InputGroup}`}>
                                    {" "}
                                    <div className={` ${Style.InputGroup}`}>
                                        <label
                                            className={` ${Style.InputLabel}`}
                                            htmlFor="mail"
                                        >
                                            Adresse Mail
                                            <span style={{ color: "#E53E3E" }}>
                                                {" "}
                                                *
                                            </span>
                                        </label>
                                        <div className={` ${Style.InputField}`}>
                                            <MdOutlineEmail color="gray.500" />
                                            <input
                                                id="mail"
                                                type="text"
                                                {...field}
                                                className={`${
                                                    fieldState.invalid &&
                                                    Style.InputError
                                                }`}
                                            ></input>
                                        </div>
                                        <div
                                            className={` ${Style.ErrorMessage}`}
                                        >
                                            {fieldState.error?.message}
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <Controller
                            name="message"
                            control={control}
                            render={({ field, fieldState }) => (
                                <div className={` ${Style.InputGroup}`}>
                                    {" "}
                                    <div className={` ${Style.InputGroup}`}>
                                        <label
                                            className={` ${Style.InputLabel}`}
                                            htmlFor="message"
                                        >
                                            Message
                                            <span style={{ color: "#E53E3E" }}>
                                                {" "}
                                                *
                                            </span>
                                        </label>
                                        <div className={` ${Style.InputField}`}>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                placeholder="message"
                                                {...field}
                                                className={`${
                                                    fieldState.invalid &&
                                                    Style.InputError
                                                }`}
                                            ></textarea>
                                        </div>
                                        <div
                                            className={` ${Style.ErrorMessage}`}
                                        >
                                            {fieldState.error?.message}
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <div className={` ${Style.FormButton}`}>
                            <button
                                disabled={!formState.isValid}
                                type="submit"
                                name="submit-form"
                            >
                                Envoyer Le Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;

const EMAILSIGNATURE = ``;
