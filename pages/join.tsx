import React, { useContext } from "react";

import { useBreakpointValue, useToast } from "@chakra-ui/react";
import axios from "axios";
import * as Yup from "yup";

import { AppContext } from "../contexts";

import { Form, HeroHeader, PageContent } from "../components";

import { FormSubmit } from "../types";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter a name."),
  email: Yup.string()
    .required("Please enter an email address.")
    .email("Please enter a valid email address."),
  subject: Yup.string().required("Please enter a subject."),
  message: Yup.string().required("Please enter a message."),
});

const initialValues: FormSubmit = {
  name: "",
  email: "",
  subject: "Become a Nomad",
  message: "",
};

export default function Join() {
  const toast = useToast();
  const { setError } = useContext(AppContext);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (values: FormSubmit, { resetForm }): void => {
    setIsLoading(true);

    axios
      .post("/api/sendgrid", values)
      .then(() => {
        toast({
          title: "Email Sent",
          description:
            "Thanks for your enquiry. The team will be in touch as soon as possible.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        resetForm();
      })
      .catch(() => setError("Error submitting form. Please try again later."))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <HeroHeader
        backgroundUrl={
          isMobile
            ? "images/mobile/banner-join.jpg"
            : "images/desktop/banner-join.jpg"
        }
        heading="Want to know what it's like to be a Nomad?"
        subtitle="We're always on the look out for developers and designers who seek the flexible and remote life style."
      />
      <PageContent mediumPaddingX={48} width="100%">
        <Form
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          disclaimer={"No need to send a CV. We just want to get to know you."}
          isLoading={isLoading}
        />
      </PageContent>
    </>
  );
}
