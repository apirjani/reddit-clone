import { firestore } from "../../../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { Community } from "@/src/atoms/communitiesAtom";
import safeJsonStringify from "safe-json-stringify";
import CommunityNotFound from "@/src/components/community/CommunityNotFound";
import Header from "@/src/components/community/Header";
import PageContent from "@/src/components/layout/PageContent";
import CreatePostLink from "@/src/components/community/CreatePostLink";
import Posts from "@/src/components/posts/Posts";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  if (!communityData) {
    // return <CommunityNotFound />;
    return <CommunityNotFound />;
  }

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
          <Posts communityData={communityData} />
        </>
        <>
          <div>RHS</div>
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // get community data and pass it to client
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );

    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    //could add error page here
    console.log("getServerSideProps error", error);
  }
}
export default CommunityPage;
