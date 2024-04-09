import { FC, PropsWithChildren } from "react";
import { Container } from "@mui/material";
import styled from "@emotion/styled";

const GradientBackground = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
`;

const StyledContainer = styled(Container)`
    height: 100%;
    overflow: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const AppContainer: FC<PropsWithChildren> = (props) => (
  <GradientBackground>
    <StyledContainer {...props} />
  </GradientBackground>
);