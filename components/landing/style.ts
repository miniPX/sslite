import styled from "@emotion/styled";
import { GENERAL_INPUT_HEIGHT } from "../../subcomponents/select/style";

const MARGIN_SIZE = "10px";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
});

export const Dialog = styled.div({
  display: "flex",
  flexDirection: "column",
  //alignItems: "center",
  height: "80%",
  width: "80%",
  border: "1px solid black",
  borderRadius: "20px",
  padding: "10px",
  paddingTop: "20px",
});

export const Title = styled.div({
  fontSize: "30px",
  marginBottom: "10px",
});

export const DialogText = styled.div({
  paddingLeft: "15px",
  fontSize: "20px",
  marginBottom: MARGIN_SIZE,
});

export const AudienceInput = styled.input({
  width: `calc(100% - 43px)`,
  height: `${GENERAL_INPUT_HEIGHT}px`,
  borderRadius: `${GENERAL_INPUT_HEIGHT / 2}px`,
  border: "1px solid black",
  marginTop: MARGIN_SIZE,
  paddingLeft: "40px",
});

export const SubmitButton = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: MARGIN_SIZE,
  height: "30px",
  width: "120px",
  borderRadius: "15px",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    cursor: "pointer",
  },
});

export const ConceptTitle = styled.div({
  marginTop: MARGIN_SIZE,
  fontSize: "30px",
  width: "100%",
});

export const ConceptDescription = styled.div({
  marginTop: MARGIN_SIZE,
  fontSize: "15px",
  width: "100%",
});
