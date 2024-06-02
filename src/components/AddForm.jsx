import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";

export const AddForm = ({ setContacts }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addHandler = (data) => {
    const newContact = { id: v4(), ...data };

    setContacts((prevContacts) => [...prevContacts, newContact]);

    reset();
  };

  return (
    <Card sx={{ my: 2, minWidth: 275 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(addHandler)}
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        autoComplete="off"
      >
        <CardContent>
          <Typography marginBottom={4} variant="h5" component="div">
            مخاطب جدید
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8 }}>
            <Grid item xs={4}>
              <TextField
                label="نام و نام خانوادگی"
                id="fullName"
                {...register("fullName", { required: true })}
                error={errors.fullName?.type === "required"}
                helperText={
                  errors.fullName
                    ? "وارد کردن نام و نام خانوادگی الزامی است"
                    : ""
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="شماره تلفن"
                id="phone"
                {...register("phone", { required: true })}
                error={errors.phone?.type === "required"}
                helperText={
                  errors.phone ? "وارد کردن شماره تلفن الزامی است" : ""
                }
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ paddingX: 2 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disableElevation
          >
            افزودن مخاطب
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
