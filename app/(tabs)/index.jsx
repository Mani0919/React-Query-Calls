import { useQuery } from "@tanstack/react-query";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useCustomMutation } from "../../hooks/custommutation";
import {
  useMutationEffect,
  useMutationSuccessEffect,
} from "../../hooks/helper";
import {
  createDummyUser,
  deleteDummyUser,
  fetchDummyUsers,
} from "../../services/calls";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Mzk3MGE5MDRhODk1ZDkwOTFkMTdjNyIsImlhdCI6MTc1MjgyMTI5Nn0.ooxllzT7W2UaDQ-EJIzcdGZntn5DCwcCsRqUAV2axSY";
export default function HomeScreen() {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["dummyUsers"],
    queryFn: fetchDummyUsers,
  });
  const addUserMutation = useCustomMutation(
    createDummyUser,
    "dummyUsers",
    "User Added"
  );
  const deleteUserMutation = useCustomMutation(
    deleteDummyUser,
    "dummyUsers",
    "User Deleted"
  );
  // useMutationSuccessEffect(addUserMutation.isSuccess, () => {
  //   Alert.alert("addedd");
  // });
  useMutationSuccessEffect(deleteUserMutation.isSuccess, () => {
    Alert.alert("deleted");
  });

  useMutationEffect({
    isSuccess: addUserMutation.isSuccess,
    isError: addUserMutation.isError,
    onSuccess: () => {
      Alert.alert("Success", "User added successfully!");
    },
    onError: () => {
      Alert.alert("Error", "Failed to add user!");
    },
  });
  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: "New User added",
      email: `newuser${Date.now()}@gmailexample.com`,
    };
    addUserMutation.mutate(newUser);
    console.log(addUserMutation);
  };
  const handleDeleteUser = async () => {
    try {
      const res = await deleteUserMutation.mutate();
      console.log("Deleted last user", res);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
        Users List
      </Text>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        users.map((user) => (
          <Text key={user.id}>
            {user.name} - {user.email}
          </Text>
        ))
      )}

      <Button
        title={addUserMutation.isLoading ? "Loading..." : "Add New User"}
        onPress={handleAddUser}
      />
      <View style={{ marginTop: 10 }}>
        <Button
          title={
            deleteUserMutation.isLoading ? "Loading..." : "Delete Last User"
          }
          onPress={handleDeleteUser}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
