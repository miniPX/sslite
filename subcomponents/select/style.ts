import styled from "@emotion/styled";

export const GENERAL_INPUT_HEIGHT = 43;

export const SelectContainer = styled.div({
  height: `${GENERAL_INPUT_HEIGHT}px`,
  width: "100%",
  position: "relative",
});

export const SelectButton = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: `${GENERAL_INPUT_HEIGHT}px`,
  paddingLeft: "40px",
  paddingRight: "40px",
  border: "1px solid black",
  borderRadius: `${GENERAL_INPUT_HEIGHT / 2}px`,
  "&:hover": {
    cursor: "pointer",
  },
});

export const SelectList = styled.div({
  height: "30px",
  top: 0,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  marginRight: "50px",
});

export const SelectOption = styled.div({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  alignItems: "center",
  width: "90%",
  height: "100%",
  fontSize: "18px",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "45px",
  paddingRight: "20px",
  backgroundColor: "white",
  border: "1px solid black",
  "&:hover": {
    // backgroundColor: "black",
    // color: "white",
    cursor: "pointer",
  },
});

export const SelectedOptionIcon = styled.div({
  height: "100%",
  width: `${GENERAL_INPUT_HEIGHT}px`,
  //  backgroundColor: "red",
  position: "absolute",
  left: 0,
  zIndex: 11,
});

export const SelectIcon = styled.div({
  height: "100%",
  width: `${GENERAL_INPUT_HEIGHT}px`,
  // backgroundColor: "red",
});
