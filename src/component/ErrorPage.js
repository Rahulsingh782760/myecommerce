
import React from "react";

import {Box, styled} from '@mui/material';

const ErrorContainer = styled(Box)`
     margin-top: 73px;
     margin-bottom: 5px;
`;


const ErrorPage = () => {
     return (
          <ErrorContainer >
               <img src="../ErrorPage.avif" alt="error" style={{ width: '100%', height: '80vh', zIndex: -2 }} />
          </ErrorContainer>
     )
};

export default ErrorPage;