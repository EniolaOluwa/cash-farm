import React from "react";
import { Box, Text, HStack, useToast, IconButton } from "@chakra-ui/react";
import { BsBookmarks } from "react-icons/bs";

const Nav = () => {
  const toast = useToast();

  const handleBookmark = () =>
    toast({
      title: "Alert",
      description: "This feature is in development",
      status: "info",
      isClosable: true,
      duration: 7000,
      variant: "left-accent",
    });

  return (
    <Box as="nav" width="full" padding="3" borderBottom="1px lightgrey solid">
      <HStack as="header" width="100%" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="md" color="facebook.400">
          .CashFarm
        </Text>
        <IconButton
          bg="white"
          onClick={handleBookmark}
          color="gray.400"
          aria-label="Bookmarks"
          icon={<BsBookmarks />}
        />
      </HStack>
    </Box>
  );
};

export default Nav;
