import React from "react";

import Introduction from "./Introduction";
import SearchForm from "../../src/components/SearchForm";
import { ROUTES } from "../../src/router/routes";
import Wrapper, { ContentWrapper } from "../../src/components/Wrapper";


function Page(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Introduction />
      </ContentWrapper>
      <SearchForm to={ROUTES.USERS} />
    </Wrapper>
  );
}

// import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
// Page.getInitialProps = async ({ store, req }) => {
//   await store.dispatch(getRepositoriesAction());
// };

export default Page;
