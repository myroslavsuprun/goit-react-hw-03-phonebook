import styled from '@emotion/styled';

export const ContactsListTag = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 12px 12px 12px 30px;

  list-style-type: disc;
  font-size: 20px;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactsButton = styled.button`
  display: flex;
  align-items: center;

  margin-left: 8px;
  padding: 0px 10px;

  width: fit-content;
  max-height: 23px;

  background-color: aliceblue;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  font-size: 14px;

  cursor: pointer;

  &:active,
  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.6);
  }

  &:active {
    background-color: antiquewhite;
  }
`;
