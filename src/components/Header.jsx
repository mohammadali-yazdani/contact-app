import { Box, Grid, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        minHeight={180}
      >
        <Typography color="primary" variant="h4" fontWeight={600}>
          دفترچه تلفن
        </Typography>
      </Grid>
    </Box>
  );
};
