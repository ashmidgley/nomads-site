import { extendTheme } from "@chakra-ui/react";

import { Button, FormLabel, Input, Link, Text, Textarea } from "./components";

import { fonts } from "./foundations";
import { styles } from "./styles";

const config = {
  styles,
  fonts,
  components: {
    Link,
    Text,
    Button,
    FormLabel,
    Input,
    Textarea,
  },
};

export default extendTheme(config);
