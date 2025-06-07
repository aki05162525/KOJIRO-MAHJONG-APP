import { Text, type TextProps } from "@chakra-ui/react";

interface FormErrorMessageProps extends TextProps {
  message?: string;
}

export const FormErrorMessage = ({
  message,
  ...props
}: FormErrorMessageProps) => {
  if (!message) return null;

  return (
    <Text color="red.500" fontWeight="bold" {...props}>
      {message}
    </Text>
  );
};
