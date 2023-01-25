import React, { useContext } from "react";

import { Toast, useBreakpointValue, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
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
  subject: "",
  message: "",
};

export default function Hire() {
  const router = useRouter();
  const toast = useToast();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [isLoading, setIsLoading] = React.useState(false);
  const { setError } = useContext(AppContext);

  const handleSubmit = async (
    values: FormSubmit,
    { resetForm }
  ): Promise<void> => {
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
            ? "images/mobile/banner-hire.jpg"
            : "images/desktop/banner-hire.jpg"
        }
        heading="Have an idea to try?"
        subtitle="We're only a message away and more than happy to set up a call."
        actions={[
          {
            label: "VIEW PITCH DECK",
            variant: "client",
            callback: () => router.push("/pitch-deck"),
          },
        ]}
      />
      <PageContent mediumPaddingX={48} width="100%">
        <Form
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          isLoading={isLoading}
          buttonVariant="client"
        />
      </PageContent>
    </>
  );
}
