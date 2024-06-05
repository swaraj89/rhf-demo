import { ReactNode, forwardRef } from 'react';
// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

const FormProvider = forwardRef<HTMLFormElement, Props>(({ children, onSubmit, methods }, ref) => (
  <Form {...methods}>
    <form onSubmit={onSubmit} ref={ref}>
      {children}
    </form>
  </Form>
));

export default FormProvider;
