import { Grid, Container, Typography } from "@material-ui/core";

const Content = ({ content }) => {
  const { header, subHeader, paragraph } = content;
  return (
    <>
      <Typography variant="h1">{header}</Typography>
      <Typography variant="h3">{subHeader}</Typography>
      <Container className="App" spacing={2}>
        <Grid item>
          <Typography variant="body2">{paragraph}</Typography>
        </Grid>
      </Container>
    </>
  );
};

export default Content;
