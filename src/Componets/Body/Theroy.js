import React from "react";
import "./Body.css";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";

export default function Theroy() {
  return (
    <>
     
      <Box
        display={"flex"}
        m={3}
        flexDir={'column'}
        borderWidth={"2px"}
        shadow={"1px 2px 8px 3px black"}

        borderRadius={"20px"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      > 
       <Heading>THEORY</Heading>
        <Text
          display={"block"}
          alignItems={"center"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        > 
        <FontAwesomeIcon icon={faCircleDot} /> {'\t'}{'\t'}
          Recursion is a programming concept where a function calls itself
          within its own body. It allows a problem to be divided into smaller
          subproblems that are solved recursively until a base case is reached,
          upon which the function returns its result. Recursion is widely used
          in solving problems that can be broken down into smaller, similar
          instances.
          <Divider/>
        <FontAwesomeIcon icon={faCircleDot} /> {'\t'}{'\t'}
          Merge Sort is a sorting algorithm that follows the divide-and-conquer
          paradigm It works by recursively dividing the unsorted list or array
          into two halves until each subarray contains only one element. Then,
          it merges the subarrays back together in a sorted order until the
          entire array is sorted.
          <Divider/>
          {'\t'} 
       <Text ml={"2%"}>
       <FontAwesomeIcon  icon={faArrowCircleRight} /> {'\t'}{'\t'}
          The merge step of Merge Sort is the key operation where the sorted
          subarrays are combined to produce a sorted array. It compares the
          elements of the subarrays in order and merges them by placing the
          smaller element into the final sorted array. This process continues
          until all elements are merged into the sorted array.
       </Text>
          <Divider/>
        <Text ml={'2%'}>
        <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
          Overall, Merge Sort is known for its efficiency and stability. It
          guarantees a time complexity of O(n log n), making it suitable for
          sorting large datasets. The use of recursion allows for a
          straightforward implementation of the algorithm, making it easier to
          understand and maintain.
        </Text>
        <Divider/>
        <FontAwesomeIcon icon={faCircleDot} />
        Recursive nature of Sorting : Sorting an array of size N can be recursively broken down into sorting two smaller arrays of N/2, and each of these smaller arrays can be broken down into even smaller arrays of size N/4 each, and so on
        </Text>
        
      </Box>
     </>
  );
}
