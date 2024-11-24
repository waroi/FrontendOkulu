import Title from "../components/Title";

export default {
  title: "Deneme/Title",
  component: Title,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

// const Template = (args) => <Title {...args} />;

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   text: "Small Title",
// };

export const Small = {
  args: {
    size: "small",
    text: "Small Title",
  },
};

export const Medium = {
  args: {
    size: "medium",
    text: "Medium Title",
  },
};

export const Large = {
  args: {
    size: "large",
    text: "Large Title",
  },
};

export const withClick = {
  args: {
    size: "medium",
    text: "withClick Title",
    onclick: () => alert("clicked"),
  },
};

// export const Medium = Template.bind({});
// Medium.args = {
//   size: "medium",
//   text: "Medium Title",
// };
// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   text: "Large Title",
// };
// export const withClick = Template.bind({});
// withClick.args = {
//   size: "large",
//   text: "withClick Title",
//   onclick: () => alert("clicked"),
// };
