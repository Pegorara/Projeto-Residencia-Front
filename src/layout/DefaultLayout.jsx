import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { AppHeader } from "./header/AppHeader";

export function DefaultLayout() {
  return (
    <>
      <Grid
        h="calc(100vh)"
        templateAreas={`"header header"
                              "main main"
                              "footer footer"`}
        gridTemplateRows={"10vh 1fr 10vh"}
      >
        <GridItem area={"header"}>
          <AppHeader />
        </GridItem>
        <GridItem pl="2" bg="gray.200" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="gray.200" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}
