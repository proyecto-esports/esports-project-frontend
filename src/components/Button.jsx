import ButtonUI from '../components-ui/ButtonUI';

const Button = (props) => {
  const { children } = props;

  return <ButtonUI {...props}>{children}</ButtonUI>;
};

export default Button;
