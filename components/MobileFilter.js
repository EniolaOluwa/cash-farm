import React from 'react';
import {
  Flex,
  Button
} from "@chakra-ui/react";
import { MdTune } from 'react-icons/md';
import { BsBookmarks } from 'react-icons/bs';

const MobileFilter = () => {
  return (
    <Flex justifyContent="space-between" w="inherit" px="3" align="center" height="6rem">
      <Button size="md" colorScheme="facebook" variant="outline" aria-label="Bookmarks" leftIcon={<MdTune /> }>Filter</Button>
      <Button size="md" colorScheme="facebook" variant="outline" aria-label="Bookmarks" leftIcon={<BsBookmarks /> }>Create Alert</Button>
  </Flex>
  );
}

export default MobileFilter;
