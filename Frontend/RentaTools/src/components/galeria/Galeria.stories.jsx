import GaleriaImagenes from "./Galeria"

export default {
  title: "components/Galeria",
  component: GaleriaImagenes,
};


const Template = (args) => <GaleriaImagenes {...args}/>;

export const Primary = Template.bind({});