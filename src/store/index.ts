import { createContainer } from "unstated-next";
import useUser from "./modules/useUser";

const useStore = () => {
  return {
    user: useUser(),
  };
};

export const Store = createContainer(useStore);
