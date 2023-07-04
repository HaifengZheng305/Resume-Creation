import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    width: 100%;
    margin: 0px;
    background: rgba(0,0,0, .7);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
 
export const NavLink = styled(Link)`
padding: 1rem;
color: white;
text-align: center;
text-decoration: none;
display: block;
position: relative;
&::after {
  content: '';
  position: absolute;
  top: 2.5rem;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color:white;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
  transform: scale(0);
  transform-origin: center;
}
&:hover::after,
&:focus::after,
&.current::after {
  opacity: 1;
  transform: scale(1);
}
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style-type: none;
    margin-right: -24px;
`;

export const Name = styled.header`
  position: absolute;
  flex-grow: 1;
  left: 44%;
  color: white;
`;

export const Avator = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  color: white;
`;