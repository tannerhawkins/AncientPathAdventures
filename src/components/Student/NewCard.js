import styled from "styled-components";
import { Constants } from "../../data/constants";

const NewCard = ({
  children,
  className,
  plusIconColor,
  barColor,
  cardColor,
  onClick,
}) => {
  const textColor = cardColor === Constants.COLOR.GREEN ? "white" : "black";

  return (
    <Card
      onClick={onClick}
      className={className}
      style={{ backgroundColor: cardColor }}
    >
      <StyledText style={{ color: textColor }}>{children}</StyledText>
      <Bar style={{ backgroundColor: barColor }}></Bar>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  position: absolute;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 40px;
`;

const Bar = styled.div`
  position: absolute;
  bottom: 0;
  height: 25px;
  width: 100%;
`;

export default NewCard;
