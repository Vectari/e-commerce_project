import styled from "styled-components";
import ARROW_ICON from "../../assets/arrow.svg";
import { Theme } from "../../styles/Theme";
import { useState } from "react";

const StyledAccordion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${Theme.color["text-grey"]};
  font-weight: 700;
  cursor: pointer;

  + p {
    margin-top: 0.5rem;
  }

  .expanded {
    transform: rotate(180deg);
  }
`;

export function Accordion({ items }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            key={item.title}
            onClick={() => {
              setActiveItemIndex(index);
            }}
          >
            <StyledAccordion>
              <p>{item.title} </p>
              <img
                className={activeItemIndex === index ? "expanded" : "null"}
                src={ARROW_ICON}
                alt="arrow icon"
              />
            </StyledAccordion>
            {activeItemIndex === index && <p>{item.content}</p>}
          </li>
        );
      })}
    </ul>
  );
}
