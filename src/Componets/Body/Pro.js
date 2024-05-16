import { Box, Divider, Heading,  Text } from "@chakra-ui/react";
import { faArrowAltCircleRight, faCircleDot, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Pro() {
  return (
    <>
     
      <Box
        display={"block"}
        flexDirection={"column"}
        m={3}
        borderWidth={"2px"}
        shadow={"1px 2px 8px 3px black"}
        padding={'2'}
        borderRadius={"10px"}
        justifyContent={"center"}
      >  
         <Heading textAlign={'center'}>Procedure</Heading>
        <Heading ml={"1.5%"} textAlign={'left'}fontSize={"2xl"}> <FontAwesomeIcon icon={faLightbulb}/>{'\t'}Can sorting be performed using the Divide and Conquer approach?</Heading>
        <Text  display={" block"}
          flexDirection={"column"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}> <FontAwesomeIcon icon={faCircleDot}/>{'\t'}
        We can visualise sorting an array of size N as two sub-problems : sorting
        two arrays of size N/2, and then somehow combining the two smaller
        sorted arrays. Sorting a smaller array will be easier than sorting the
        bigger array.
        <Divider/><FontAwesomeIcon icon={faCircleDot}/>{'\t'}
        Recursive nature of Sorting : Sorting an array of size N can be
        recursively broken down into sorting two smaller arrays of N/2, and each
        of these smaller arrays can be broken down into even smaller arrays of
        size N/4 each, and so on. 
        <Text ml={"2%"}>
        <br/>{'\t'}
        <FontAwesomeIcon icon={faArrowAltCircleRight}/>{'\t'}
        Merge sort is a sorting algorithm that uses this approach. In Merge Sort
        we will:
        <br/>{'\t'}
        <FontAwesomeIcon icon={faArrowAltCircleRight}/>{'\t'}
        
        DIVIDE : Split an array into parts recursively into half.
        <br/>{'\t'}
        <FontAwesomeIcon icon={faArrowAltCircleRight}/>{'\t'}
        
        CONQUER : Sort the sub-arrays individually.
        <br/>{'\t'}
        <FontAwesomeIcon icon={faArrowAltCircleRight}/>{'\t'}
       
        COMBINE : Merge the sorted sub-arrays to get a big sorted array.
       
        </Text>
        </Text>
       
      </Box>
    </>
  );
}
