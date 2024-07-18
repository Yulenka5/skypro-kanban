import styled from "styled-components";
import {DayPicker} from "react-day-picker";


export const CalendarBlock = styled(DayPicker)`
  --rdp-cell-size: 27px;
  --rdp-caption-font-size: 14px;
  --rdp-accent-color: rgb(148, 166, 190);
  --rdp-background-color: rgb(234, 238, 246);
  --rdp-accent-color-dark: rgb(148, 166, 190);
  --rdp-accent-color: #94A6BE;
  --rdp-background-color: #EAEEF6;
  --rdp-accent-color-dark: #94A6BE;
  --rdp-background-color-dark: rgb(21, 20, 25);
  --rdp-outline: 2px solid var(--rdp-accent-color);
  --rdp-outline-selected: 3px solid var(--rdp-accent-color);
  --rdp-selected-color: #fff;
  color: rgb(148, 166, 190);
  font-size: 10px;
  font-weight: 400;
`

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
`

export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
  `

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
  
  a {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
    &:hover {
      color: #000000;
    }
  }
  `
export const PopNewCardText = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`
export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const PopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
 `
export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

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
export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;
`
export const PopNewCardLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder,
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`
export const FormNewArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder,
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
`
export const PopCardCategories = styled.div`
  margin-bottom: 20px;
`
export const PopCardCategoriesSub = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const FormNewCreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;

  :hover {
    background-color: #33399b;
`

export const CategoriesThemes = styled.div`
     display: flex;
     flex-wrap: nowrap;
     align-items: flex-start;
     justify-content: flex-start;
`
export const RadioLabel = styled.label`
     font-size: 14px;
     font-weight: 600;
     line-height: 14px;
     white-space: nowrap;
`
export const WrapperRadio = styled.div`
     display: inline-block;
     width: auto;
     height: 30px;
     padding: 8px 20px;
     border-radius: 24px;
     margin-right: 7px;
     opacity: ${({$isActive})=> $isActive ? '1' : '0.4'};
  
`

export const RadioInput = styled.input`
display: none;
`


  // ._orange {
  //   background-color: #FFE4C2;
  //   color: #FF6D00;
  // }
  //
  // ._green {
  //   background-color: #B4FDD1;
  //   color: #06B16E;
  // }
  //
  // ._purple {
  //   background-color: #E9D4FF;
  //   color: #9A48F1;
  // }

  
  



  





