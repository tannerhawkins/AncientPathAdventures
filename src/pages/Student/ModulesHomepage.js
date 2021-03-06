import React, { useEffect } from "react";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import Hamburger from "../../components/Template/Hamburger";
import Main from "../../layouts/Main";
import NewCard from "../../components/Student/NewCard";
import { Constants } from "../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentClass } from "../../app/class/selectors";
import { selectClassList } from "../../app/account/selectors";
import ModuleCard from "../../components/Template/ModuleCard";
import ApaModuleCard from "../../components/Template/ApaModuleCard";
import Dropdown, { Option } from "../../components/Template/ClassDropdown";
import { useHistory } from "react-router";
import { apaModulesDb, modulesDb } from "../../data/firebase";
import { setCurrentStep, setSelectedModule } from "../../app/module/actions";
import StyledButton from "../../components/Template/Button";
import ModuleContainer from "../../components/Template/ModuleContainer";

const ModulesHomepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentClass = useSelector(selectCurrentClass);
  const classes = useSelector(selectClassList);
  const isInClass = classes[0] != null;
  const classList = useSelector(selectClassList);

  const assignedModuleCards = currentClass
    ? classList
        .filter((cls) => cls.cid == currentClass.cid)[0]
        ?.modules?.map((module) => (
          <ModuleCard
            module={module}
            key={module}
            data-test="module-card"
            onClick={() => moduleOnClick(module, false)}
          ></ModuleCard>
        ))
    : undefined;

  const apaModuleCards = currentClass
    ? classList
        .filter((cls) => cls.cid == currentClass.cid)[0]
        ?.apaModules?.map((module) => (
          <ApaModuleCard
            module={module}
            key={module}
            data-test="module-card"
            onClick={() => moduleOnClick(module, true)}
          ></ApaModuleCard>
        ))
    : undefined;

  const moduleOnClick = (module, isApa) => {
    if (isApa) {
      apaModulesDb
        .doc(module)
        .get()
        .then((doc) => {
          dispatch(setCurrentStep(-1));
          dispatch(setSelectedModule(doc.data()));
          history.push("/student/module");
        });
    } else {
      modulesDb
        .doc(module)
        .get()
        .then((doc) => {
          dispatch(setCurrentStep(-1));
          dispatch(setSelectedModule(doc.data()));
          history.push("/student/module");
        });
    }
  };

  useEffect(() => {}, [currentClass]);

  return (
    <Main title={"Dashboard"} description={"Dashboard"}>
      <StyledHomepage>
        <SideBar />
        <Header />
        <Hamburger />
        <StyledBody>
          <BodyHeader>
            <TitleContainer>
              <StyledTitle>Dashboard</StyledTitle>
              <Dropdown />
              <StyledAddClassButton
                onClick={() => history.push(`/student/add-class`)}
                data-test="add-class"
              >
                Add Class
              </StyledAddClassButton>
            </TitleContainer>
            <EnrollmentCode>
              {/* Only shows the enrollment code if a current class is selected */}
              {currentClass && (
                <p>
                  <b>Enrollment Code:</b> {currentClass.cid}
                </p>
              )}
            </EnrollmentCode>
          </BodyHeader>
          {isInClass ? (
            <>
              <StyledSectionHeader>Assigned Modules</StyledSectionHeader>
              <ModuleContainer
                moduleCards={assignedModuleCards?.concat(apaModuleCards)}
              />
              {/* <StyledSectionHeader>Completed Modules</StyledSectionHeader>
              <ModulesContainer>{completedModuleCards}</ModulesContainer> */}
            </>
          ) : (
            <p>
              You have not been assigned to a class, please talk to your teacher
            </p>
          )}
        </StyledBody>
      </StyledHomepage>
    </Main>
  );
};

const StyledHomepage = styled.div``;

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`;

const StyledAddClassButton = styled(StyledButton)`
  height: 60px;
  width: 130px;
  margin-left: 40px;
  background-color: ${Constants.COLOR.GREEN};
  @media (max-width: 1024px) {
    height: 45px;
    width: 120px;
    margin: 10px 10px;
  }
  @media (max-width: 500px) {
    height: 25px;
    width: 100px;
    margin-top: 5px;
    margin-left: 0px;
    align-self: flex-end;
  }
`;

const BodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-flow: column;
  }
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
  @media (max-width: 1000px) {
    margin: 5px 10px;
  }
  @media (max-width: 500px) {
    margin-right: 0;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    align-items: flex-start;
    flex-flow: column;
  }
`;

const EnrollmentCode = styled.p`
  font-size: 18px;
  @media (max-width: 1000px) {
    margin: 5px 0;
  }
`;

const StyledSectionHeader = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

export default ModulesHomepage;
