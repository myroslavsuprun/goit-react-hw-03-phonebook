import styled from '@emotion/styled';

export const AddContactWrapper = styled.div`
  border: 1px solid black;
  padding: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 18px;
`;

export const FormInput = styled.input`
  width: 150px;
  padding: 4px;
`;

export const FormButtonSubmit = styled.button`
  padding: 4px 10px;

  width: fit-content;
  min-width: 100px;

  background-color: aliceblue;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  cursor: pointer;

  &:active,
  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.6);
  }

  &:active {
    background-color: antiquewhite;
  }
`;
