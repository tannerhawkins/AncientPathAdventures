import React, { useEffect } from "react";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import Hamburger from "../../components/Template/Hamburger";
import Main from "../../layouts/Main";
import NewCard from "../../components/Teacher/NewCard";
import { Constants } from "../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentClass } from "../../app/class/selectors";
import { selectClassList } from "../../app/account/selectors";
import Dropdown, { Option } from "../../components/Template/ClassDropdown";
import { useHistory } from "react-router";
import ModuleCard from "../../components/Template/ModuleCard";
import ApaModuleCard from "../../components/Template/ApaModuleCard";
import ModuleContainer from "../../components/Template/ModuleContainer";
import { setSelectedModule } from "../../app/module/actions";
import { modulesDb } from "../../data/firebase";

const ModulesHomepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentClass = useSelector(selectCurrentClass);
  const classes = useSelector(selectClassList);
  const assignedModules = currentClass?.modules;
  const apaModules = currentClass?.apaModules;
  const moduleOnClick = (module) => {
    modulesDb
      .doc(module)
      .get()
      .then((doc) => {
        dispatch(setSelectedModule(doc.data()));
        history.push("/teacher/create-module");
      });
  };
  const moduleCards = assignedModules?.map((currModule) => (
    <ModuleCard
      module={currModule}
      key={currModule}
      data-test="module-card"
      onClick={() => moduleOnClick(currModule)}
    />
  ));
  const apaModuleCards = apaModules?.map((currModule) => (
    <ApaModuleCard
      module={currModule}
      key={currModule}
      data-test="module-card"
    />
  ));

  return (
    <Main title={"Dashboard"} description={"Dashboard"}>
      <StyledHomepage>
        <SideBar />
        <Header />
        <Hamburger />
        <StyledBody>
          <BodyHeader>
            <TitleContainer>
              <StyledTitle>Dashboard </StyledTitle>
              <Dropdown />
            </TitleContainer>
            {/* Only shows the enrollment code if a current class is selected */}
            {currentClass && (
              <EnrollmentCode>
                <b>Enrollment Code:</b> {currentClass.cid}
              </EnrollmentCode>
            )}
          </BodyHeader>
          <StyledSectionHeader>New</StyledSectionHeader>
          <NewCardContainer>
            {currentClass && (
              <StyledCard
                plusIconColor="green"
                barColor={Constants.COLOR.GREEN}
                cardColor={Constants.COLOR.TEAL}
                onClick={() => history.push("/teacher/add-module")}
                dataTest="add-module"
              >
                Module
              </StyledCard>
            )}
            {currentClass && (
              <StyledCard
                plusIconColor="teal"
                barColor={Constants.COLOR.TEAL}
                cardColor={Constants.COLOR.GREEN}
                onClick={() => history.push("/teacher/add-students")}
                dataTest="add-student"
              >
                Students
              </StyledCard>
            )}
            <StyledCard
              plusIconColor="green"
              barColor={Constants.COLOR.GREEN}
              cardColor="white"
              onClick={() => history.push("/teacher/create-class")}
              dataTest="add-class"
            >
              Class
            </StyledCard>
          </NewCardContainer>
          <StyledSectionHeader>Assigned Modules</StyledSectionHeader>
          <ModuleContainer moduleCards={moduleCards?.concat(apaModuleCards)} />
        </StyledBody>
      </StyledHomepage>
    </Main>
  );
};

const StyledHomepage = styled.div`
height: 110vh;`;

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  height: 100vh;
  padding: 0 50px;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
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
  margin-left: 20px;
  @media (max-width: 1000px) {
    margin: 5px 0px;
  }
`;

const NewCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 950px;
`;

const StyledCard = styled(NewCard)`
  width: 250px;
  height: 228px;
  @media (max-width: 1000px) {
    width: 180px;
    height: 200px;
  }
  @media (max-width: 500px) {
    width: 100px;
    height: 200px;
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
