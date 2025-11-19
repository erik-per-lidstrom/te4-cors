import React from "react";

const initialstate = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};

const ContactFrom = () => {
  const [form, setForm] = React.useState(initialstate);

  console.log(form);

  function handelchange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>exampel object</h2>
      <label htmlFor="firstname">firstname</label>
      <br />
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={form.firstname}
        onChange={handelchange}
      />
      <br />
      <label htmlFor="lastname">lastname</label>
      <br />
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={form.lastname}
        onChange={handelchange}
      />
      <br />
      <label htmlFor="email">email</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handelchange}
      />
      <br />
      <label htmlFor="message">message</label>
      <br />
      <textarea name="message" id="message" onChange={handelchange}></textarea>
    </div>
  );
};

export default ContactFrom;
