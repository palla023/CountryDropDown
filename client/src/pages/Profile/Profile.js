/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { DeleteUser, GetAllUsers } from "../../apicalls/users.js";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import "./profile.css";
import ProfileForm from "./ProfileForm.js";

const Profile = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [openUserForm, setOpenUserForm] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const getUsers = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllUsers();
      setUsers(response.data);
      dispatch(HideLoading());
    } catch (err) {
      dispatch(HideLoading());
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const deleteHandler = async (id) => {
    try {
      dispatch(ShowLoading());
       await DeleteUser(id);
      toast.success("User deleted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      getUsers();
      dispatch(HideLoading());
    } catch (err) {
      dispatch(HideLoading());
      console.log(err);
    }
  };
  return (
    <>
      <div className="table-responsive mt-5">
        <table className="table">
          <thead className="thead-light">
            <tr className="text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Hobbies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id} className="align-middle text-center">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.hobbies.join(', ')}</td>
                  <td className="flex gap-1">
                    <i
                      className="ri-pencil-line ms-1 text-warning"
                      onClick={() => {
                        setSelectedUser(user);
                        setOpenUserForm(true);
                      }}
                    ></i>
                    <i
                      className="ri-delete-bin-5-line mx-2  text-danger"
                      onClick={() => deleteHandler(user._id)}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {openUserForm && (
        <ProfileForm
          open={openUserForm}
          setOpen={setOpenUserForm}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          getUsers={getUsers}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Profile;
