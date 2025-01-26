import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

function GenreSkelton() {
  return (
    <List>
      <ListItem paddingY="8px">
        <HStack>
          <SkeletonCircle size="40px" />
          <Skeleton height="40px">
            <Box>Hello World!</Box>
          </Skeleton>
        </HStack>
      </ListItem>
    </List>
  );
}

export default GenreSkelton;
