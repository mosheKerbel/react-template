import ButtonDriver from './Button.driver';
const buttonTestkit = ({container, dataHook}) => {
  const element = container.querySelector(`[data-hook="${dataHook}"]`);
  return ButtonDriver({element});
};

export default buttonTestkit;
