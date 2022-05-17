import React from "react";
import { Grid, Header } from "semantic-ui-react";

import { Dead } from "@components/SVGIcons";

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={"middle"}>
          <Grid.Column>
            <Dead size="154px" />
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Mataste la palta</Header>
            <p>Lo tocaste tanto que lo mataste.</p>
            <p>
              Por otro lado eres una persona muy curiosa y has descubierto esto.
              :)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>
        {`
          .container {
            padding: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default ModalHeaderContent;
