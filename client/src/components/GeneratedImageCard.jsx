import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow + "90"};
  color: ${({ theme }) => theme.arrow + "80"};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 8px;
`;

const GeneratedImageCard = ({ src, loading, onRetry }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (loading) {
      setShowError(false);
    } else {
      const timer = setTimeout(() => {
        setShowError(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress sx={{ color: "inherit", width: 32, height: 32 }} />
          <span>Generating Your Image...</span>
        </>
      ) : (
        <span>Write a prompt to generate an image</span>
      )}

      {showError && !src && (
        <ErrorMessage>Your API key is expired</ErrorMessage>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
