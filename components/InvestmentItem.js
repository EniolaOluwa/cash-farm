import React from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { MdStar } from 'react-icons/md';
import { BsBookmark, BsBookmarkFill  } from 'react-icons/bs';
import InvestmentDetails from './InvestmentDetails';

const logoSrc='https://www.balayoglobal.com/wp-content/uploads/2021/01/logo-1-230x93.png';

const InvestmentItem = ({investment}) => {
  const [modal, setModal] = React.useState(false)

  return (
      <Box onClick={() => setModal(true)} _pressed={{backgroundColor: "lightgrey"}}>
      <Box height="8rem" width="full"  borderTop= "1px lightgrey solid">
      <HStack spacing={5} align="center" width="100%" height="full">
        <VStack spacing={1} height="full" pl="4">
          <Image src={logoSrc} mt="1rem" height="3rem" width="4rem" border="1px solid lightgrey" p="2" rounded="sm" objectFit="contain" />
          <Flex mt={2} align="center">
            <Text ml={1} fontSize="xs" fontWeight="bold" color="teal.200">{investment.star}</Text>
            <Box as={MdStar} color="teal.200" />
          </Flex>
        </VStack>
        <VStack spacing={1}  w="full" pr="4" height="full" >
          <Flex justifyContent="space-between" w="inherit" mt="1rem">
            <Text as="h3" fontSize="md" color="facebook.300" fontWeight="bold">{investment.company}</Text>
            {investment.bookmarked? <IconButton size="xs" bg="white" color="teal.400" aria-label="Bookmarks" icon={<BsBookmarkFill /> } />  : <IconButton size="xs" bg="white" color="gray.400" aria-label="Bookmarks" icon={<BsBookmark /> } />}
          </Flex>
          <Box w="full">
            <Text fontSize="sm" fontWeight="bold">{investment.investment}</Text>
          </Box>
          <Flex justifyContent="space-between" width="full">
            <Text fontSize="xs" fontWeight="bold" w="50%" color="teal.200">{`${investment.interest} Per ${investment.duration}`}</Text>
            <Text fontSize="xs" fontWeight="bold" color="gray.500">&#x20A6;{investment.minimum} Minimum</Text>
          </Flex>
        </VStack>
      </HStack>
    </Box>
      <InvestmentDetails open={modal} setModal={setModal} />
  </Box>
  );
}

export default InvestmentItem;
