import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { useHistory } from "react-router-dom";
import { classDataDb, userDataDb } from "../../data/firebase";
import Dropdown, { Option } from "../../components/Template/ClassDropdown";
import { useSelector } from "react-redux";
import { selectCurrentClass } from "../../app/class/selectors";
import { selectClassList } from "../../app/account/selectors";
import firebase from "firebase";
import Hamburger from "../../components/Template/Hamburger";

const AddStudents = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState();
  const currentClass = useSelector(selectCurrentClass);
  const classes = useSelector(selectClassList);
  const handleSubmit = () => {
    setErrorMessage();

    // get form data
    const data = Object.values(document.forms.studentsForm).reduce(
      (obj, field) => {
        obj[field.name] = field.value;
        return obj;
      },
      {}
    );

    // checks fields are filled out
    if (data["email"] === "" || !data["email"].includes("@")) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    userDataDb
      .where("email", "==", data["email"])
      .get()
      .then((result) => {
        const data = result.docs[0]?.data();
        if (data === undefined || data.accountType !== "student") {
          setErrorMessage("Student not found");
          return;
        } else if (
          data.classList.map((cls) => cls.cid).includes(currentClass.cid)
        ) {
          setErrorMessage("Student already in class");
          return;
        } else {
          classDataDb.doc(currentClass.cid).update({
            students: firebase.firestore.FieldValue.arrayUnion({
              uid: data.uid,
              displayName: data.displayName,
              email: data.email,
            }),
          });
          userDataDb.doc(data.uid).update({
            classList: firebase.firestore.FieldValue.arrayUnion({
              cid: currentClass.cid,
              modules: currentClass.modules,
              apaModules: currentClass.apaModules,
              className: currentClass.className,
            }),
          });
          setErrorMessage(
            `Added ${data.displayName} to ${currentClass.className}`
          );
          document.getElementById("studentsForm").reset();
        }
      });
  };

  // Should really just take an input of a students email and add that student
  // to the current selected class. Should maybe include the drop down from the
  // modules page to allow teacher to change selected class on this page.
  return (
    <Main title={"Add a Student"} description={"Add a Student"}>
      <SideBar />
      <Header />
      <Hamburger />
      <StyledBody>
        <StyledTitle>Add Students to a Class</StyledTitle>
        <StyledForm id="studentsForm">
          <StyledText>Student's Email</StyledText>
          <StyledInput type="text" name="email" data-test="email" required />
          <StyledText>Add to Class</StyledText>
          <Dropdown />
          <StyledError data-test="error">{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSubmitButton onClick={handleSubmit} data-test="submit">
              ADD TO CLASS
            </StyledSubmitButton>
            <StyledDashboardButton
              onClick={() => history.push(`teacher/home`)}
              data-test="back"
            >
              BACK TO DASHBOARD
            </StyledDashboardButton>
          </StyledButtonContainer>
        </StyledForm>
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`;

const StyledTitle = styled.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`;

const StyledSubmitButton = styled(Button)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    margin-right: 10px;
    font-size: 20px;
    height: 50px;
  }
`;

const StyledDashboardButton = styled(Button)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

const StyledError = styled.p`
  color: red;
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export default AddStudents;
