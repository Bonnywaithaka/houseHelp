import { gql } from "@apollo/client";

export const GET_HOUSE_HELPS = gql`
  query GetHouseHelps($filters: HouseHelpFiltersInput) {
    houseHelps(filters: $filters) {
      data {
        id
        attributes {
          firstName
          lastName
          nationality
          emailAddress
          dob
          phone
          homeTown
          gender
          profilePic {
            data {
              id
              attributes {
                name
                url
                alternativeText
              }
            }
          }
          backgroundImage {
            data {
              id
              attributes {
                name
                url
                alternativeText
                caption
              }
            }
          }
        }
      }
    }
  }
`;
