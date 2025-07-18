import { addDummyUser, deletelastitem, dummyUsers } from "../components/dummy";

export const fetchDummyUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...dummyUsers]); // Return a copy
    }, 3000);
  });
};

export const createDummyUser = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      addDummyUser(user);
      resolve(user);
    }, 500);
  });
};

export const deleteDummyUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      deletelastitem();
      resolve(id);
    }, 500);
  });
};
