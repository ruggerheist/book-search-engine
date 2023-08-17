import { gql } from '@apollo/client';

//maybe bookData needed here
 // bookData {
            //     _id
            //     username
            //     email
            // }
export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
           
        }
    }
`;