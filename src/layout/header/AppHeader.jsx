import {
  Box,
  Container,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  IconButton,
} from "@chakra-ui/react";

import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";

import Logo from "../../assets/images/logo.png";

export function AppHeader() {
  return (
    <Box
      bg={"blue.700"}
      h="10vh"
      display="flex"
      alignItems={"center"}
      pl={70}
      pr={70}
    >
      <Container
        maxW={"10vw"}
        h="10vh"
        bg={"gray.200"}
        centerContent
        justifyContent={"center"}
      >
        <Image src={Logo} />
      </Container>
      <InputGroup size="md" alignSelf={"center"} maxW={"50vw"}>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaSearch} boxSize={6} />}
        />
        <Input placeholder="Busque aqui" variant={"filled"} />
      </InputGroup>
      <Container
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        maxH={50}
        maxW={250}
        gap={3}
      >
        <Icon as={FaUser} color={"gray.200"} boxSize={6} />
        <div>
          <Text color={"gray.200"}>
            Faça <b>LOGIN</b> ou <br />
            crie seu <b>CADASTRO</b>
          </Text>
        </div>
      </Container>
      <IconButton
        borderRadius={50}
        size="lg"
        aria-label="Search database"
        variant="unstyled"
        display="flex"
        justifyContent={"center"}
        icon={<Icon as={FaShoppingCart} color={"gray.200"} boxSize={6} />}
      />
    </Box>
  );
}
