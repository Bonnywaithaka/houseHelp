import { gql } from "@apollo/client";

export const CREATE_HOUSE_HELP = gql`
  mutation CreateHouseHelp(
    $firstName: String
    $lastName: String
    $emailAddress: String
    $phone: String!
    $dob: Date
    $nationality: ENUM_HOUSEHELP_NATIONALITY
    $gender: ENUM_HOUSEHELP_GENDER
    $homeTown:String
    $password:String
  ) {
    createHouseHelp(
      data: {
        firstName: $firstName
        lastName: $lastName
        emailAddress: $emailAddress
        phone: $phone
        dob: $dob
        nationality: $nationality
        gender:$gender
        homeTown:$homeTown
        password:$password
      }
    ) {
      data {
        id
        attributes {
          firstName
          lastName
          emailAddress
          phone
          nationality
        }
      }
    }
  }
`;
