import { ComponentProps } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

interface FormProps extends ComponentProps<"form"> {
  methods: UseFormReturn<FieldValues, any, undefined>;
  onSubmit: (data: any) => void;
}

export function FormRoot({ methods, onSubmit, ...props }: FormProps) {
  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
}
