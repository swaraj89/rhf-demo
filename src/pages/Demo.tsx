import { FormProvider, RHFTextField } from "../components/hook-form";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Button, Stack } from "@mui/material";

export const DemoPage = () => {
    const NewUserSchema = Yup.object().shape({
        userName: Yup.string()
            .required("User name is required to proceed.")
            .max(80, "Cannot exceed 80 characters")
    })

    const defaultValues = {
        userName: ''
    }

    const methods = useForm({
        resolver: yupResolver(NewUserSchema),
        defaultValues,
        shouldFocusError: true,
    });

    const onSubmit = (data: unknown) => {
        console.log(data)
    }

    const {
        handleSubmit,
        reset,
        formState: { isSubmitting },
      } = methods;

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            
            <RHFTextField fullWidth name="userName" label="User Name" size="medium" />

            <Stack spacing={1.5} sx={{ mt: 5 }} direction={'row-reverse'}>
              <LoadingButton
                fullWidth
                variant="contained"
                loading={isSubmitting}
                type="submit"
              >
                Done
              </LoadingButton>
            <Button fullWidth color="primary" variant="outlined" onClick={() => reset()}>
              Cancel
            </Button>
          </Stack>
          
        </FormProvider>
    )
}