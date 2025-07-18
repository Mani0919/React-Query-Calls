// dummyUsers.js
export let dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
  },
];

// Add new user to the array
export const addDummyUser = (newUser) => {
  dummyUsers.push(newUser);
};

export const deletelastitem = () => {
  dummyUsers.pop();
};
