import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto 20px 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
`;

export const Button = styled.button`
  align-items: center;
  width: 70px;
  height: 30px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #003d98;
`;
