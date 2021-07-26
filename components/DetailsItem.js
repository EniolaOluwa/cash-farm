import React from 'react';
import {
  Box,
  Text,
} from "@chakra-ui/react";

const DetailsItem = ({title, children}) => {
  return (
    <Box mb="4">
      <Text fontSize="sm" fontWeight="bold" color="facebook.500">{title}</Text>
      <Text fontSize="sm" textAlign="justify">{children}</Text>
    </Box>
  );
}

export default DetailsItem;
