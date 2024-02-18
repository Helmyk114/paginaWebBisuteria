import { mirage } from 'ldrs'

mirage.register()

const Loader = () => {
  return (
    <l-mirage
      size="150"
      speed="2.0"
      color="#6977E4"
    ></l-mirage>
  );
};

export default Loader;
