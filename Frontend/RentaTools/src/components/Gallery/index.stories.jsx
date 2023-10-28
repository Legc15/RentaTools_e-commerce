import Galeria from "./index"

export default {
  title: "components/Galeria",
  component: Galeria,
}

const mockImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXcx9oVEJbn8FjGuwH0lBdp7K3SY2m_ZuyyNhFTLP21lQIu_ka6fnpkO1NhoNciUO4L0&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYwjiZEm0yzC1TyyTqmJ9MH6JOYUqGTZNDg&usqp=CAU",
]

const Template = (args) => <Galeria {...args} />

export const Primary = Template.bind({})

Primary.args = { imagenes: mockImages }
