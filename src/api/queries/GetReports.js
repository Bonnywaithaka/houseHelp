import { gql } from "@apollo/client";

export const GET_REPORTS = gql`
  query GetReports($filters: ReportFiltersInput) {
    reports(filters: $filters) {
      data {
        id
        attributes {
          houseHelpId
          houseHelpName
          title
          description
          status
          photos {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
