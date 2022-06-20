import { Articles } from "@components/articles";
import { getArticlesMetadata } from "@helpers/mdx.helpers";

export const getStaticProps = async () => {
  const articles = await getArticlesMetadata();
  return {
    props: {
      articles,
    },
  };
};

export default Articles;