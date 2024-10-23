import { useEffect, useState } from "react";
import Banner from "../components/Home/Banner";
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import Comments from "../components/Comments";

const Homepage = () => {
  const [data, isLoading, errorMessange] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetHeadline"
  );

  return (
    <Layout>
      <Banner data={data} isLoading={isLoading} errorMens={errorMessange} />
      <Comments
        url={"https://moviesfunctionapp.azurewebsites.net/api/GetReviews"}
      />
    </Layout>
  );
};

export default Homepage;
