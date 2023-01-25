import React, { FC } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Field, Formik, Form as FormikForm } from "formik";

import { FormSubmit } from "../types";

interface Props {
  initialValues: FormSubmit;
  onSubmit: (values: FormSubmit, { resetForm }) => void;
  validationSchema: any;
  isLoading?: boolean;
  disclaimer?: string;
  buttonVariant?: "client" | "nomad";
}

export const Form: FC<Props> = ({
  initialValues,
  onSubmit,
  validationSchema,
  isLoading = false,
  disclaimer = "",
  buttonVariant = "nomad",
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <FormikForm>
          <Flex direction="column" gap={6}>
            <Field name="name">
              {({ field, form }): React.ReactNode => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name" fontWeight="bold">
                    {"Name"}
                  </FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter name..."
                    borderColor={form.errors.name && "red.200"}
                  />
                  <Box position="absolute" top="68px" left="2px">
                    <FormErrorMessage fontSize="11px">
                      {form.errors.name}
                    </FormErrorMessage>
                  </Box>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }): React.ReactNode => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email" fontWeight="bold">
                    {"Email"}
                  </FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter email..."
                    borderColor={form.errors.email && "red.200"}
                  />
                  <Box position="absolute" top="68px" left="2px">
                    <FormErrorMessage fontSize="11px">
                      {form.errors.email}
                    </FormErrorMessage>
                  </Box>
                </FormControl>
              )}
            </Field>

            <Field name="subject">
              {({ field, form }): React.ReactNode => (
                <FormControl
                  isInvalid={form.errors.subject && form.touched.subject}
                >
                  <FormLabel htmlFor="subject" fontWeight="bold">
                    {"Subject"}
                  </FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter subject..."
                    borderColor={form.errors.subject && "red.200"}
                  />
                  <Box position="absolute" top="68px" left="2px">
                    <FormErrorMessage fontSize="11px">
                      {form.errors.subject}
                    </FormErrorMessage>
                  </Box>
                </FormControl>
              )}
            </Field>

            <Field name="message">
              {({ field, form }): React.ReactNode => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <FormLabel htmlFor="subject" fontWeight="bold">
                    {"Message"}
                  </FormLabel>
                  <Textarea
                    {...field}
                    placeholder="Enter message..."
                    borderColor={form.errors.subject && "red.200"}
                  />
                  <Box position="absolute" top="110px" left="2px">
                    <FormErrorMessage fontSize="11px">
                      {form.errors.message}
                    </FormErrorMessage>
                  </Box>
                </FormControl>
              )}
            </Field>
          </Flex>
          <Flex
            justifyContent={{
              base: "flex-end",
              md: disclaimer ? "space-between" : "flex-end",
            }}
            alignItems="center"
            mt={12}
          >
            {disclaimer && !isMobile && <Text color="black">{disclaimer}</Text>}
            <Button variant={buttonVariant} type="submit" isLoading={isLoading}>
              {"START A CONVERSATION"}
            </Button>
          </Flex>
        </FormikForm>
      )}
    </Formik>
  );
};
