import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./rightContent/RightContent";
import SearchInput from "./SearchInput";
import { auth } from "@/src/firebase/clientApp";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <RightContent user={user} />
      {/* <Directory />
      <SearchInput />
      <RightContent /> */}
    </Flex>
  );
};
export default Navbar;
