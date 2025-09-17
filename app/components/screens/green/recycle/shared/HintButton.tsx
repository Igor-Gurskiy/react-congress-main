import React from "react";
import styled from "styled-components";
import RecycleButton from "@/components/screens/green/recycle/shared/RecycleButton";

const HintButton = styled(RecycleButton)`
  position: relative;
  padding: 0;
  height: 50px;
  width: 50px;

  border: 0;
  border-radius: 50%;

  background: none;
  text-decoration: none;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;

  transition: color .33s cubic-bezier(0.4, 0.0, 0.2, 1),
  background .33s cubic-bezier(0.4, 0.0, 0.2, 1),
  box-shadow .33s cubic-bezier(0.4, 0.0, 0.2, 1);
  background: #8CCF3A;

  font-weight: 800;
  font-size: 35px;
  line-height: 55px;
  text-align: center;
  color: #FFFFFF;
  
  @media (max-width: 767px) {
    width: 35px;
    height: 35px;
    font-size: 24px;
    line-height: 36px;
  }
`

export default HintButton