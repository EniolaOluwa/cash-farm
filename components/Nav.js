import React from 'react';
import {
  Box,
  Text,
  HStack,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import { BsBookmarks, BsSearch } from 'react-icons/bs';

const Nav = () => {
  const toast = useToast();

  const handleBookmark = () => toast({title: 'Alert', description:'The bookmark feature is not yet functional', status: "warning", isClosable: true, duration: 7000, variant: "left-accent" })

  return (
    <Box as="nav" width="full" padding="3" borderBottom="1px lightgrey solid">
    <HStack as="header" width="100%" justifyContent="space-between">
      <IconButton bg="white" onClick={handleBookmark} color="gray.400" aria-label="Bookmarks" icon={<BsBookmarks /> } />
      <Text fontWeight="bold" fontSize="lg" textDecoration="underline" color="blue.600">CashFarm</Text>
      <IconButton bg="white" color="gray.400" aria-label="Bookmarks" icon={<BsSearch /> } />
    </HStack>
  </Box>
  );
}

export default Nav;
