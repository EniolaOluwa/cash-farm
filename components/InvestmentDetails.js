import React from 'react';
import {
  Box,
  Text,
  Button,
  Modal,
  Image,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import DetailsItem from './DetailsItem';

const InvestmentDetails = ({open, setModal}) => {
  const { onClose } = useDisclosure()
  const logoSrc='https://www.balayoglobal.com/wp-content/uploads/2021/01/logo-1-230x93.png';

  return (
    <Modal colorScheme="twitter" closeOnOverlayClick={false} isOpen={open} onClose={() => setModal(false)} motionPreset="slideInBottom" size="full" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src={logoSrc} m="auto" w="8rem" maxHeight="5rem" boxShadow="lg" mb="2" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Text textAlign="center" textDecoration="underline" fontWeight="bold" color="facebook.400" mb="4">Details</Text>
            <DetailsItem title="Company">Balayo Global Investment</DetailsItem>
            <DetailsItem title="Minumum Investment">&#x20A6;20,000</DetailsItem>
            <DetailsItem title="Returns">13% Payout every month and 100% at the end of 7 month</DetailsItem>
            <DetailsItem title="Details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis reprehenderit blanditiis omnis quia hic fugit minima. Porro sapiente ipsum libero rerum, deserunt blanditiis autem dolorem eos at, necessitatibus consequatur.</DetailsItem>
            <Box textAlign="center">
              <Button as="a" colorScheme="facebook" variant="outline">Invest Now</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default InvestmentDetails;
