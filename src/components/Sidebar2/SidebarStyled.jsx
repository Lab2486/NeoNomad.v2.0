import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  max-width: 220px;
  width: 80%;
  height: 100%;
  background-color: black;
  background-color: #000000;
  opacity: 1;
  background-image: linear-gradient(
      #101010 0.6000000000000001px,
      transparent 0.6000000000000001px
    ),
    linear-gradient(
      to right,
      #101010 0.6000000000000001px,
      #000000 0.6000000000000001px
    );
  background-size: 12px 12px;
  color: white;
  box-shadow: 0px 10px 20px -3px #000;
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  user-select: none;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
  transition: opacity 0.3s ease, visibility 0.2s ease, transform 0.3s ease;
  border-right: 2px solid white;

  &.show {
    pointer-events: all;
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    color: white;
  }

  .sidebar_head {
    color: white;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    font-size: 1.2rem;
    align-items: center;
    text-decoration: none;
  }

  .logo {
    width: 50px;
    border-radius: 5px;
  }
  .sidebar_body {
    padding: 2.8rem 0;
    color: white;
  }
  .sidebar_foot {
    bottom: 0;
    position: fixed;
    margin-bottom: 10px;
  }

  .sidebar_body {
    border-top: 1px dashed var(--color-3);
    border-bottom: 1px dashed var(--color-3);
    color: white;

    ul {
      display: grid;
      gap: 1.4rem;
      list-style: none;

      a {
        opacity: 0.8;
        color: white;
        text-decoration: none;

        &:hover {
          opacity: 1;
        }
      }
    }

    .dropdown {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .dropdown_list {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      padding-left: 1rem;
      font-size: 0.95rem;
      color: white;
      list-style: none;
    }
  }
`;

export const SidebarToggler = styled.div`
  margin-top: 7px;
  position: fixed;
  top: 0;
  right: 4vw;
  z-index: 99;
  width: 1.8rem;
  height: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
  color: white;

  span {
    width: 100%;
    height: 2.4px;
    background-color: white;
    opacity: 0.875;
    transition: all 0.3s ease;
  }

  .parpadea {
    animation-name: parpadeo;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    -webkit-animation-name: parpadeo;
    -webkit-animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }
  @-moz-keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:hover span {
    opacity: 1;
  }

  /* Referring to "SidebarWrapper styled-component" & when they have the 'show' class then their adjacent-sibling (i.e., SidebarToggler) will... */

  ${SidebarWrapper}.show + & {
    justify-content: center;

    span {
      margin-top: -1.2px;
      margin-bottom: -1.2px;
    }

    span:first-child {
      transform: rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
      transform: translateX(-100%);
    }

    span:last-child {
      transform: rotate(-45deg);
    }
  }
`;
