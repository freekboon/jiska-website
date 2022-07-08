import React from "react";
import withLayout from "~utils/withLayout";
import request from "~utils/dato";
import { gql } from "graphql-request";
import HomePageTemplate from "~templates/HomePageTemplate";
import { ImageFragment } from "~components/Image";
import { JobFragment } from "~components/Job";
import { SkillFragment } from "~components/Skill";

const Home = (props) => <HomePageTemplate {...props} />;

const HOME_PAGE_QUERY = gql`
  query HomePage($locale: SiteLocale!) {
    allSections(locale: $locale) {
      sectionId
      title
    }
    homePage(locale: $locale) {
      heading
      intro
      heroImage {
        ${ImageFragment(600, 400)}
      }
      previousJobs {
        ${JobFragment}
      }
      skills {
        ${SkillFragment}
      }
    }
  }
`;

export const getStaticProps = async ({ locale }) => {
  const data = await request({
    query: HOME_PAGE_QUERY,
    variables: { locale },
    includeDrafts: true,
  });

  return {
    props: {
      ...data,
    },
  };
};

export default withLayout(Home);
