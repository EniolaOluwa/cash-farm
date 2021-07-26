import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import InvestmentDetails from "./InvestmentDetails";

const logoSrc =
  "https://www.balayoglobal.com/wp-content/uploads/2021/01/logo-1-230x93.png";

const InvestmentItem = ({ investment }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <Box onClick={() => setModal(true)} _pressed={{ backgroundColor: "lightgrey" }}>
      <Box height="8rem" width="full" borderTop="1px lightgrey solid">
        <HStack spacing={5} align="center" width="100%" height="full">
          <VStack spacing={1} height="full" pl="4">
            <Image
              src={logoSrc}
              alt={investment.company + " logo"}
              mt="1rem"
              height="3rem"
              width="4rem"
              border="1px solid lightgrey"
              p="2"
              rounded="md"
              boxShadow="base"
              objectFit="contain"
            />
            <Flex mt={2} align="center">
              <Text ml={1} fontSize="10px" fontWeight="bold" color="facebook.400">
                {investment.star}
              </Text>
              <Box as={MdStar} color="facebook.400" size="11px" />
            </Flex>
          </VStack>
          <VStack spacing={0.5} w="full" pr="4" height="full">
            <Flex justifyContent="space-between" w="inherit" mt="1rem">
              <Text as="h3" fontSize="sm" color="black" fontWeight="bold">
                {investment.investment}
              </Text>
              {investment.bookmarked ? (
                <IconButton
                  size="xs"
                  bg="white"
                  color="facebook.400"
                  aria-label="Bookmarks"
                  icon={<BsBookmarkFill />}
                />
              ) : (
                <IconButton
                  size="xs"
                  bg="white"
                  color="gray.400"
                  aria-label="Bookmarks"
                  icon={<BsBookmark />}
                />
              )}
            </Flex>
            <Box w="full">
              <Text fontSize="10px" fontWeight="hairline">
                By {investment.company}
              </Text>
            </Box>
            <Flex flexDirection="column" justifyContent="space-between" width="full">
              <Text
                fontSize="xs"
                fontWeight="normal"
                w="50%"
                color="black"
              >{`${investment.interest} Per ${investment.duration}`}</Text>
              <Text fontSize="xs" fontWeight="normal" color="black">
                &#x20A6;{investment.minimum} Minimum
              </Text>
            </Flex>
          </VStack>
        </HStack>
      </Box>
      <InvestmentDetails open={modal} setModal={setModal} />
    </Box>
  );
};

export default InvestmentItem;
