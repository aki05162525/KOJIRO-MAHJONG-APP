import { Heading } from "@chakra-ui/react";

interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Heading size="3xl" fontWeight="bold" textAlign="center" mb={4}>
      {title}
    </Heading>
  );
};
