import { auth } from "@/src/firebase/clientApp";
import { Flex, Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthModal from "../../modal/auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal user={user} />
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RightContent;
