import  InputField  from "./index.js";

//👇 This default export determines where your story goes in the story list
export default {
 
  title: "Input",
  component: InputField
};

//👇 We create a “template” of how args map to rendering
const Template = () => <InputField  />;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
  }
};
