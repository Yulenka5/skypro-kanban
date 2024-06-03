import styled from "styled-components";

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
  display: none;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media (max-width: 660px) {
    padding: 0;
  }
`;

export const Calendarblock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;
export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCellM = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  opacity: 0;

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;
export const CalendarCellD = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;
export const CalendarCellDCur = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

export const CalendarInput = styled.input`
  div {
    padding: 0 7px;

    @media (max-width: 660px) {
      padding: 0;
    }
  }

  p {
    color: #94a6be;
    font-size: 10px;
    line-height: 1;

    @media (max-width: 660px) {
      font-size: 14px;
    }
  }

  span {
    color: #000000;
  }
`;
