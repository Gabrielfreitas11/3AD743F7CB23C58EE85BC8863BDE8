import React, { useEffect } from "react";
import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";
import MainHeaderButtonsWrapper from "../../components/MainHeaderButtonsWrapper";
import { makeStyles, Button, Paper, Container } from "@material-ui/core";

import { i18n } from "../../translate/i18n";

const integrations = [
  {
    id: "mercado-livre",
    logo: mlLogo,
    link: "https://auth.mercadolivre.com.br/authorization?client_id=6490552539634382&response_type=code&redirect_uri=https://michame.com.br/callback"
  }
];

export default function Marketplace(props) {
  const classes = useStyles();

  useEffect(() => {
    // const fetchData = async () => {
    // };
    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClickIntegration(link) {
    window.location.href = link;
  }

  return (
    <MainContainer>
      <MainHeader>
        <Title>{i18n.t("quickMessages.title")}</Title>
      </MainHeader>
      <Container maxWidth="lg" className={classes.container}>
        {integrations.map(el => (
          <Grid item xs={12} sm={6} md={3}>
            <MarketplaceButtonIntegration
              key={el.id}
              onClick={() => handleClickIntegration(el.link)}
            >
              <img src={el.logo} />
            </MarketplaceButtonIntegration>
          </Grid>
        ))}
      </Container>
    </MainContainer>
  );
}
