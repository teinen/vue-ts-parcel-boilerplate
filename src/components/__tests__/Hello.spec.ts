import { shallowMount } from "@vue/test-utils";
import Hello from "../Hello.vue";

describe("Hello.vue", () => {
  test("renders all props when passed", () => {
    // Set up
    const framework = "Vue.js";
    const altjs = "TypeScript";
    const bundler = "Parcel";

    const wrapper = shallowMount(Hello, {
      propsData: { framework, altjs, bundler }
    });

    // Verify
    expect(wrapper.text()).toMatch("Hello, Vue.js + TypeScript + Parcel");
  });
});
