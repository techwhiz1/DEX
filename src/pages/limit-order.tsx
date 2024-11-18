"use client";

import { Select } from "@/components/Select";
import TokenInput from "@/components/TokenInput";
import { useHover } from "@/hooks/useHover";
import SwapButtonTwoTurnIcon from "@/icons/misc/SwapButtonTwoTurnIcon";
import EthereumNetworkIcon from "@/icons/networks/EthereumNetworkIcon";
import SolanaNetworkIcon from "@/icons/networks/SolanaNetworkIcon";
import { colors } from "@/theme/cssVariables";
import {
    Box,
    Button,
    Flex,
    Link,
    Image,
    Container,
    Text,
    Input,
    VStack,
    HStack,
    Icon,
    InputGroup,
    InputRightElement,
    ChakraProvider,
    extendTheme,
    SimpleGrid
} from "@chakra-ui/react";
import { useRef } from "react";


// Theme configuration
const theme = extendTheme({
    colors: {
        primary: "#678CF2",
        secondary: "#f5f5f5d0",
        card: "#0c0c0c",
        neutral: "#B5C8F9",
        positive: "#48F4FF",
    },
    styles: {
        global: {
            body: {
                bg: "#0c0b0b",
                color: "#f5f5f5d0"
            }
        }
    }
});

function SwapIcon(props: { onClick?: () => void }) {
    const targetElement = useRef<HTMLDivElement | null>(null)
    const isHover = useHover(targetElement)
    return (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" marginBottom={'-15px'}>
            {/* Left Line */}
            <Box flex="1" height="2px" bg="var(--Neutrals-Neutral-600)" />

            {/* Swap Button */}
            <SimpleGrid
                ref={targetElement}
                width="42px"
                height="42px"
                placeContent="center"
                rounded="10px"
                cursor="pointer"
                bg="var(--Neutrals-Neutral-400)"
                mx="2px" // Space between the button and the lines
                zIndex={2}
                onClick={props.onClick}
            >
                <SwapButtonTwoTurnIcon />
            </SimpleGrid>

            {/* Right Line */}
            <Box flex="1" height="2px" bg="var(--Neutrals-Neutral-600)" />
        </Box>
    )
}


// Transaction Card Component
const TransactionCard = () => (
    <Box maxW="29rem" p={6} bg="#0d0c10" rounded="2xl" border="1px" borderColor="primary">
        <Box >
            <Flex justify="space-between" align="center" mb={2}>
                <Text color="neutral">You're selling</Text>
                <Button display="flex" alignItems="center" gap={2}>
                    <EthereumNetworkIcon height={'24px'} width={'24px'} />
                    <Text>ETH</Text>
                    <Box as="svg" w={4} h={4} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M19 9l-7 7-7-7" />
                    </Box>
                </Button>
            </Flex>

            <Box bg="primary.100" rounded="lg" p={3}>
                <TokenInput
                    disableSelectToken={true}
                    ctrSx={{ w: '100%', textColor: colors.textTertiary }}
                    value="0"
                    showControlButtons={true}
                    sx={{
                        border: '1px solid var(--Neutrals-Neutral-500)',
                        bg: 'var(--Neutrals-Neutral-800)',
                        borderRadius: '10px',
                        padding: '10px'
                    }}
                />
            </Box>
            <Flex align="center" >
                <Box bg="primary.100" rounded="lg" p={3} width="100%">
                    <TokenInput
                        disableSelectToken={true}
                        name="Buy SOL"
                        hideBalance={true}
                        size="sm"
                        ctrSx={{ w: '100%', textColor: colors.textTertiary }}
                        value="0"
                        sx={{
                            border: '1px solid var(--Neutrals-Neutral-500)',
                            bg: 'var(--Neutrals-Neutral-800)',
                            borderRadius: '10px',
                            padding: '10px'
                        }}
                    />
                </Box>
                <Box 

  borderRadius="lg" 
  h="full" 
  minW="120px" 
  bg="primary.100"
  border="1px" 
  borderColor="primary"
  sx={{
    border: '1px solid var(--Neutrals-Neutral-500)',
    bg: 'var(--Neutrals-Neutral-800)',
    borderRadius: '10px',
  
}}
>
  <Text fontSize="sm" color="neutral" px="4" pt="3" mb="1">
    Expiry
  </Text>
  <Button 
    display="flex" 
    alignItems="center" 
    justifyContent="space-between" 
    w="full" 
    px="4" 
    pb="3" 
    bg="transparent" 
    _hover={{ bg: 'transparent' }}
    
  >
    
    <Text color="white">Never</Text>
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14px" height="14px">
						<path d="M19 9l-7 7-7-7" />
	</svg>
  </Button>
</Box>
            </Flex>
        </Box>

        <Box my={4}>
            <SwapIcon />
        </Box>


        <Box mb={8}>
            <Flex justify="space-between" align="center" mb={2}>
                <Text color="neutral">You're buying</Text>
                <Button display="flex" alignItems="center" gap={2}>
                    <SolanaNetworkIcon height={'24px'} width={'24px'} />
                    <Text>SOL</Text>
                    <Box as="svg" w={4} h={4} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M19 9l-7 7-7-7" />
                    </Box>
                </Button>
            </Flex>

            <Box bg="primary.100" rounded="lg" p={3}>
                <TokenInput
                    disableSelectToken={true}
                    ctrSx={{ w: '100%', textColor: colors.textTertiary }}
                    value="0"
                    showControlButtons={false}
                    sx={{
                        border: '1px solid var(--Neutrals-Neutral-500)',
                        bg: 'var(--Neutrals-Neutral-800)',
                        borderRadius: '10px',
                        padding: '10px'
                    }}
                />
            </Box>
            <Text fontSize="sm" color="gray.500" mt={1}>Balance:</Text>
        </Box>
        <Box mb="8">
  {/* Platform Fee Header */}
  <Flex justify="space-between" align="center" mb="2">
    <Text color="neutral">Platform Fee:</Text>
    <Text color="positive">0.1%</Text>
  </Flex>

  {/* Platform Fee Description */}
  <Box  borderRadius="lg" p="3" fontSize="sm"
    sx={{
      
        bg: 'var(--Neutrals-Neutral-600)',
        borderRadius: '10px',
        padding: '10px'
    }}
  >
    <Text color="neutral">
      You will receive exactly what you have specified, minus platform fees.{' '}
      <Link href="#" color="positive">
        Learn more
      </Link>
    </Text>
  </Box>
</Box>

<Button 
  w="full" 
  bg="primary" 
  py="5" 
  borderRadius="xl" 
  color="white" 
  fontWeight="medium" 
  _hover={{ bg: 'primaryHover' }}
>
  CONNECT WALLET
</Button>
    </Box>
);

// Order Table Component
const OrderTable = () => (
    <VStack spacing={4} w="full">
        <Flex w="full" px={6} py={4} justify="space-between" align="center">
            <HStack spacing={6}>
                <Button
                    px={4}
                    py={2}
                    bg="#131517"
                    rounded="lg"
                    color="white"
                    fontSize="sm"
                    fontWeight="medium"
                    border="1px"
                    borderColor="white"
                >
                    OPEN ORDERS
                </Button>
                <Button
                    px={4}
                    py={2}
                    color="gray.400"
                    fontSize="sm"
                    fontWeight="medium"
                    _hover={{ color: "white" }}
                    variant="ghost"
                >
                    ORDER HISTORY
                </Button>
            </HStack>

            <Flex gap={4}>
                <Button
                    px={4}
                    py={2}
                    bg="#131517"
                    rounded="lg"
                    color="white"
                    fontSize="sm"
                    fontWeight="medium"
                    border="1px"
                    borderColor="white"
                    display="flex"
                    alignItems="center"
                    gap={2}
                >

                    REFETCH DATA
                </Button>
                <Button
                    px={4}
                    py={2}
                    bg="#131517"
                    rounded="lg"
                    color="gray.400"
                    fontSize="sm"
                    fontWeight="medium"
                    border="1px"
                    borderColor="white"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    _hover={{ color: "white" }}
                >

                    CANCEL ALL
                </Button>
            </Flex>
        </Flex>
    </VStack>
);

// Main Page Component
export default function Home() {
    return (
        <ChakraProvider theme={theme}>
            <Box bgImage="url('/bg.png')" bgSize="cover" bgPosition="top" minH="100vh">
                <Container maxW="1440px" mx="auto">
                    <Box my={10}>
                        <Flex align="center" gap={10}>
                            <Box w="full" h="56" bg="green.400" />
                            <TransactionCard />
                        </Flex>
                        <OrderTable />
                    </Box>
                </Container>
            </Box>
        </ChakraProvider>
    );
}