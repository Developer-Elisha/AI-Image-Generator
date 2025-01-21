

import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   background: ${({ theme }) => theme.bg};
   color: ${({ theme }) => theme.text_primary};
   overflow-x: hidden;
   transition: all 0.2s ease;
`;

const Wrapper = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
`;

const Content = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Wrapper>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/post" element={<CreatePost />} exact />
              </Routes>
            </Content>
          </Wrapper>
          <Footer />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
