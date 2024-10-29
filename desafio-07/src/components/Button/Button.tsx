import * as S from "./styles"

interface ButtonProps {
  value: string;
}

export const Button: React.FC<ButtonProps> = ({value}) => {
  return (
    <S.Button>{value}</S.Button>
  )
}