import Title from "../components/Title";

export default {
  title: "Deneme/Title",
  component: Title,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        {"Title şöyle kullanılır vs vs"}
        <Story />
      </div>
    ),
  ],
};

const Template = () => <Title />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Small Title",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  text: "Medium Title",
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "Large Title",
};
export const withClick = Template.bind({});
withClick.args = {
  size: "large",
  text: "withClick Title",
  onclick: () => alert("clicked"),
};
