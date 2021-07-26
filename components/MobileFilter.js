import { Flex, Button, useToast } from "@chakra-ui/react";
import { MdTune } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";

const MobileFilter = () => {
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
    <Flex
      justifyContent="space-between"
      w="inherit"
      px="3"
      align="center"
      height="6rem"
    >
      <Button
        size="sm"
        rounded="none"
        colorScheme="facebook"
        aria-label="Bookmarks"
        leftIcon={<MdTune />}
        onClick={handleBookmark}
      >
        Filter
      </Button>
      <Button
        size="sm"
        rounded="none"
        onClick={handleBookmark}
        colorScheme="facebook"
        aria-label="Bookmarks"
        leftIcon={<BsBookmarks />}
      >
        Create Alert
      </Button>
    </Flex>
  );
};

export default MobileFilter;
