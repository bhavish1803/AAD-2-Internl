import { useState } from "react";

function Form() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    debitCardNumber: "",
    name: "",
    mobileNumber: "",
    gender: "male",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    setContacts([...contacts, formData]);
    setFormData({
      debitCardNumber: "",
      name: "",
      mobileNumber: "",
      gender: "male",
    });

  };

  const handleDelete = (index) => {
    setContacts([...contacts.slice(0, index), ...contacts.slice(index + 1)]);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="debitCardNumber">Debit Card Number:</label>
        <input
          type="number"
          id="debitCardNumber"
          name="debitCardNumber"
          minLength={16}
          maxLength={16}
          value={formData.debitCardNumber}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="number"
          id="mobileNumber"
          name="mobileNumber"
          minLength={10}
          maxLength={10}
          value={formData.mobileNumber}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">
          {editingIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Debit Card Number</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.debitCardNumber}</td>
              <td>{contact.name}</td>
              <td>{contact.mobileNumber}</td>
              <td>{contact.gender}</td>

              <td>

                <button type="button" onClick={() => handleDelete(index)}>
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
