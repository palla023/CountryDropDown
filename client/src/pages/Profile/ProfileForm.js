import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { EditUser } from "../../apicalls/users";

export const hobbies = [
  { value: "reading", label: "Reading" },
  { value: "sports", label: "Sports" },
  { value: "cooking", label: "Cooking" },
  { value: "gaming", label: "Gaming" },
  { value: "music", label: "Music" },
  { value: "art", label: "Art" },
  { value: "dancing", label: "Dancing" },
  { value: "traveling", label: "Traveling" },
  { value: "photography", label: "Photography" },
  { value: "writing", label: "Writing" },
  { value: "gardening", label: "Gardening" },
  { value: "movies", label: "Movies" },
  { value: "fashion", label: "Fashion" },
  { value: "yoga", label: "Yoga" },
  { value: "hiking", label: "Hiking" },
];

const ProfileForm = ({
  open,
  setOpen,
  selectedUser,
  setSelectedUser,
  getUsers,
}) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    hobbies: [],
  });
  const { name, email, phone, password } = formData;

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name || "",
        email: selectedUser.email || "",
        phone: selectedUser.phone || "",
        password: selectedUser.password || "",
        hobbies: selectedUser.hobbies || [],
      });
      setSelectedHobbies(selectedUser.hobbies || []);
    }
  }, [selectedUser]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMultiSelectChange = (selectedOptions) => {
    const selectedHobbyValues = selectedOptions.map((option) => option.value);
    setSelectedHobbies(selectedHobbyValues);
    setFormData({ ...formData, hobbies: selectedHobbyValues });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(ShowLoading());
      const response = await EditUser(selectedUser._id, formData);
      dispatch(HideLoading());
      setSelectedUser(response.updatedUser);
      toast.success("User updated successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      getUsers();
      setOpen(false);
    } catch (error) {
      console.error("UpdateUser Error:", error);
      toast.error("Error updating user. Please try again.");
    }
  };

  return (
    <>
      <Modal
        title="Edit User"
        open={open}
        onCancel={() => setOpen(false)}
        centered
        width={800}
        footer={null}
      >
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-12 mb-2">
                <span>Name</span>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="col-12 mb-2">
              <span>Email</span>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div className="col-12 mb-2">
              <span>Phone</span>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={changeHandler}
              />
            </div>
            <div className="col-12 mb-2">
              <span>Password</span>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={changeHandler}
              />
            </div>
            <div className="col-12 mb-2">
              <span>Hobbies</span>
              <Select
                options={hobbies}
                isMulti
                onChange={handleMultiSelectChange}
                value={hobbies.filter((hobby) =>
                  selectedHobbies.includes(hobby.value)
                )}
                className="select-control"
              />
            </div>
            <div className="d-flex justify-content-end mt-2">
              <button
                onClick={() => setOpen(false)}
                className="btn btn-outline-warning mx-2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Update
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </Modal>
    </>
  );
};

export default ProfileForm;
