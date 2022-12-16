import {
  Box,
  Button,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

const RulesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex gap="5rem" w="100%" onClick={onOpen}>
        <Box display="flex" justifyContent="space-between" w="100%">
          <Text>Manual</Text>
          <Img
            src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671133738/utils/readme-svgrepo-com_ike9rn.svg"
            alt="rules icon"
            width="1.5rem"
          />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>E-TACTIC MANUAL</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <Text>
              E-Tactic is a fantasy-type of game. For the newcomers, the game is about
              managing your own team of E-Sports with the official players of the current
              leagues. The main goal is to get as many points as possible to end up at the
              top of your league. On the tab bar, down the screen, you will be able to: -
              Visit your lineup and make changes with players on your bench (you will see
              the bench players by clicking on one player in your lines). - Visit the
              market to bid for new players; you can not see the bids of your adversaries,
              so you will have to guess and try. - Stay put on the ranking to see who is
              leading! - On the ranking site, as an Admin of the League, you will find a
              button to manage the moment of the games, renew the market and distribute
              the points. As an Administrator of the League, you will have all the Justice
              on your hands; be fair. As a team manager, you will win points by having the
              most successful lineup on your side. To do so, you will have to fight on the
              market by bidding the highest for the players that will appear weekly; but
              be careful! Money is a limited resource at the beginning of your career.
              Play smart and line up your team as best as you can. The fight for the Gold
              is about to start!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RulesModal;
