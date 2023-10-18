import Button from "./Button";

export default {
    title: "components/Button",
    component: Button,
    argTypes: {
        handleClick: { action: 'handleClick' },
    },
};

const Template = (args) => <Button {...args} />;

export const Like = Template.bind({});
Like.args = {
    size: 'small',
    color: 'red',
    colorText: 'white', 
    text: 'Like',
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
    size: 'medium',
    color: 'blue',
    colorText: 'white', 
    text: 'Submit',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    color: 'green',
    colorText: 'white', 
    text: 'Large',
};
