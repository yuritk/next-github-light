import React from "react";
import Head from "next/head";

import { ROUTES } from "../../src/router/routes";
import SearchForm from "../../src/components/SearchForm";
import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
import Wrapper from "../../src/components/Wrapper";
import Repositories from "./Repositories";

function Page({ query }) {
  const { user } = query;

  return (
    <Wrapper>
      <Head>
        <title>Repositories</title>
      </Head>
      <SearchForm />
      <Repositories user={user} />
    </Wrapper>
  );
}

Page.getInitialProps = async ({ store, query, res }) => {
  await store.dispatch(getRepositoriesAction(query));

  return {
    query
  };
};

export default Page;
