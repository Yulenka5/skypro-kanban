import styled from "styled-components";
import {topicStyles} from "../../../lib/topic.js";
export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`

export const PopBrowseConteiner = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);    
  @media screen and (max-width: 660px) {
  padding: 0;
  justify-content: flex-start;
}
`

export const PopBrowseBlock = styled.div`  
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`

export const PopBrowseContent = styled.div`   
    display: block;
    text-align: left;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`

export const PopBrowseTopBlock = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`

export const PopBrowseTtl = styled.h3` 
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`

export const CategoriesTheme = styled.div` 
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 1;

  color: ${({$themeColor}) => topicStyles[$themeColor]?.color || "#ffffff"};
  background-color: ${({$themeColor}) => topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

    p {
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }
`

export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  color: ${({$isActive}) => $isActive ? '#FFFFFF' : '#94A6BE'};
  background: ${({$isActive}) => $isActive ? '#94A6BE' : ''};
`


  export const PopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 660px) {
      display: block;
    }
  `

export const PopBrowseForm =styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormBrowseArea = styled.textarea.attrs((props) => ({
  readOnly: props.$readonly,
}))`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${props => props.theme.body};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${props => props.theme.text};
  
  &:read-only {
    background: #EAEEF6;
  }
  
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`

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
  padding: 6px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({$isActive}) => $isActive ? '1' : '0.4'};

  color: ${({$themeColor}) => topicStyles[$themeColor]?.color || "#ffffff"};
  background-color: ${({$themeColor}) => topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

`

export const RadioInput = styled.input`
  display: none;
`

export const Status = styled.div`
  margin-bottom: 11px;
`

export const StatusP = styled.div`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const PopBrowseBtnBrowse = styled.div`
  display: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
    @media screen and (max-width: 495px) {
      width: 100%;
      height: 40px;
    }
  }
  `

  export const BtnGroup = styled.div ` 
    button {
        margin-right: 8px;
        @media screen and (max-width: 495px) {
            margin-right: 0px;
        }
    }
    @media screen and (max-width: 495px) {
        width: 100%;
    }
 `

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  cursor: pointer;
  color: #565EEF;
;

  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }
`

export const BtnBg = styled.button`
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
  &:hover {
    background-color: #33399b;
  }
`

