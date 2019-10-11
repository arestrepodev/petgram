import React from "react";
import { Photocard } from "../components/PhotoCard/index";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql";

const getSinglePhoto = gql`
  getSinglePhoto($id: ID!){
    photo(id: $id){
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`;

export const PhotoCardWithQuery = () => <Photocard />;
