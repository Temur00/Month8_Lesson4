// import React, { useEffect, useState } from "react";
// import { Table, Button, Modal } from "flowbite-react";
// import axios from "axios";
// import { Item } from "../types/Student.type";

// const Students = () => {
//   const [students, setStudents] = useState<Item[]>([]);
//   const [searchStudent, setSearchStudent] = useState<string>("");
//   const [selectedGroup, setSelectedGroup] = useState<string>("all");
//   const [filteredStudents, setFilteredStudents] = useState<Item[]>([]);
//   const [openModal, setOpenModal] = useState(false);
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   username: "",
//   //   email: "",
//   //   group: "",
//   // });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get<Item[]>("http://localhost:3000/students");
//       setStudents(res.data);
//       setFilteredStudents(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this student?"
//     );
//     if (confirmDelete) {
//       try {
//         await axios.delete(`http://localhost:3000/students/${id}`);
//         setFilteredStudents(filteredStudents.filter((std) => std.id !== id));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchStudent(event.target.value);
//     filterStudents(event.target.value, selectedGroup);
//   };

//   const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedGroup(event.target.value);
//     filterStudents(searchStudent, event.target.value);
//   };

//   const filterStudents = (search: string, group: string) => {
//     const filtered = students.filter(
//       (st) =>
//         st.name.toLowerCase().includes(search.toLowerCase()) ||
//         st.username.toLowerCase().includes(search.toLowerCase()) ||
//         st.email.toLowerCase().includes(search.toLowerCase()) ||
//         st.group.toLowerCase().includes(search.toLowerCase())
//     );

//     if (group !== "all") {
//       setFilteredStudents(filtered.filter((st) => st.group === group));
//     } else {
//       setFilteredStudents(filtered);
//     }
//   };

//   // ADD
//   const AddStudentModal = () => {
//     const [formData, setFormData] = useState({
//       name: "",
//       username: "",
//       email: "",
//       group: "",
//     });
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/students", formData);
//       setFormData({
//         name: "",
//         username: "",
//         email: "",
//         group: "",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="p-5">
//       <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
//         <div>
//           <Modal.Header className="flex items-center ">
//             Add new Student
//           </Modal.Header>
//           <form onSubmit={handleSubmit}>
//             <Modal.Body>
//               <div className="space-y-6">
//                 <div className="flex gap-4">
//                   <div className="relative z-0 w-full mb-5 group ">
//                     <input
//                       type="name"
//                       name="floating_email"
//                       id="floating_email"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                       placeholder=" "
//                       required
//                     />
//                     <label
//                       htmlFor="floating_email"
//                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                     >
//                       Fullname
//                     </label>
//                   </div>
//                   <div className="relative z-0 w-full mb-5 group">
//                     <input
//                       type="name"
//                       name="floating_password"
//                       id="floating_password"
//                       value={formData.username}
//                       onChange={handleInputChange}
//                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                       placeholder=" "
//                       required
//                     />
//                     <label
//                       htmlFor="floating_password"
//                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                     >
//                       Username
//                     </label>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="relative z-0 w-full mb-5 group">
//                     <input
//                       type="email"
//                       name="floating_email"
//                       id="floating_email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                       placeholder=" "
//                       required
//                     />
//                     <label
//                       htmlFor="floating_email"
//                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                     >
//                       Email
//                     </label>
//                   </div>

//                   <div className="relative z-0 w-full mb-5 group ">
//                     <div>
//                       <select
//                         id="underline_select"
//                         value={formData.group}
//                         onChange={handleInputChange}
//                         className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
//                       >
//                         <option selected>Choose a group</option>
//                         <option value="US">Front-end</option>
//                         <option value="CA">Design</option>
//                         <option value="FR">Cyber Security</option>
//                         <option value="DE">Back-end</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Modal.Body>
//             <Modal.Footer className="flex justify-between">
//               <Button color="gray" outline onClick={() => setOpenModal(false)}>
//                 Cancel
//               </Button>
//               <Button className="w-20" type="submit">
//                 Add
//               </Button>
//             </Modal.Footer>
//           </form>
//         </div>
//       </Modal>
//       <div className="flex m-8 justify-between">
//         <p className="text-3xl">Students</p>
//         <input
//           className="w-96 rounded-lg"
//           type="search"
//           placeholder="Search..."
//           value={searchStudent}
//           onChange={handleSearchChange}
//         />
//         <select
//           className="rounded-lg"
//           name="select"
//           id="select"
//           value={selectedGroup}
//           onChange={handleGroupChange}
//         >
//           <option value="all">All</option>
//           <option value="Front-end">Front-end</option>
//           <option value="Back-end">Back-end</option>
//           <option value="Design">Design</option>
//           <option value="Cyber Security">Cyber Security</option>
//         </select>
//       </div>
//       <Table className="" hoverable style={{ width: "1240px" }}>
//         <Table.Head>
//           <Table.HeadCell>N/o</Table.HeadCell>
//           <Table.HeadCell>Name</Table.HeadCell>
//           <Table.HeadCell>Username</Table.HeadCell>
//           <Table.HeadCell>Email</Table.HeadCell>
//           <Table.HeadCell>Group</Table.HeadCell>
//           <Table.HeadCell className="text-center">Activity</Table.HeadCell>
//         </Table.Head>
//         {filteredStudents.map((student, index) => (
//           <Table.Body className="divide-y" key={student.id}>
//             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//               <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                 {index + 1}
//               </Table.Cell>
//               <Table.Cell>{student.name}</Table.Cell>
//               <Table.Cell>{student.username}</Table.Cell>
//               <Table.Cell>{student.email}</Table.Cell>
//               <Table.Cell>{student.group}</Table.Cell>
//               <Table.Cell className="flex gap-3">
//                 <div className="flex flex-wrap gap-2">
//                   <Button outline color="warning">
//                     Edit
//                   </Button>
//                   <Button
//                     outline
//                     color="failure"
//                     onClick={() => handleDelete(student.id)}
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </Table.Cell>
//             </Table.Row>
//           </Table.Body>
//         ))}
//       </Table>
//       <button
//         onClick={() => setOpenModal(true)}
//         className="rounded-full w-16 h-16 bg-blue-600 text-6xl text-white fixed flex justify-center items-center  pb-5 ml-80 right-12 bottom-9 "
//       >
//         <p className="mt-2">+</p>
//       </button>
//     </div>
//   );
// };

// export default Students;
import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "flowbite-react";
import axios from "axios";
import { Item } from "../types/Student.type";

const Students = () => {
  const [students, setStudents] = useState<Item[]>([]);
  const [searchStudent, setSearchStudent] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [filteredStudents, setFilteredStudents] = useState<Item[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    group: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get<Item[]>("http://localhost:3000/students");
      setStudents(res.data);
      setFilteredStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/students/${id}`);
        setFilteredStudents(filteredStudents.filter((std) => std.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStudent(event.target.value);
    filterStudents(event.target.value, selectedGroup);
  };

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(event.target.value);
    filterStudents(searchStudent, event.target.value);
  };

  const filterStudents = (search: string, group: string) => {
    const filtered = students.filter(
      (st) =>
        st.name.toLowerCase().includes(search.toLowerCase()) ||
        st.username.toLowerCase().includes(search.toLowerCase()) ||
        st.email.toLowerCase().includes(search.toLowerCase()) ||
        st.group.toLowerCase().includes(search.toLowerCase())
    );

    if (group !== "all") {
      setFilteredStudents(filtered.filter((st) => st.group === group));
    } else {
      setFilteredStudents(filtered);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/students", formData);
      setOpenModal(false); // Close the modal after successful submission
      setFormData({ name: "", username: "", email: "", group: "" }); // Reset form data
      fetchData(); // Refresh the student list
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div>
          <Modal.Header className="flex items-center ">
            Add new Student
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="relative z-0 w-full mb-5 group ">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="Fullname"
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="Username"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <select
                      name="group"
                      value={formData.group}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    >
                      <option value="">Choose a group</option>
                      <option value="Front-end">Front-end</option>
                      <option value="Design">Design</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Back-end">Back-end</option>
                    </select>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-between">
              <Button color="gray" outline onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
              <Button className="w-20" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
      <div className="flex m-8 justify-between">
        <p className="text-3xl">Students</p>
        <input
          className="w-96 rounded-lg"
          type="search"
          placeholder="Search..."
          value={searchStudent}
          onChange={handleSearchChange}
        />
        <select
          className="rounded-lg"
          name="select"
          id="select"
          value={selectedGroup}
          onChange={handleGroupChange}
        >
          <option value="all">All</option>
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
          <option value="Design">Design</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>
      </div>
      <Table className="" hoverable style={{ width: "1240px" }}>
        <Table.Head>
          <Table.HeadCell>N/o</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Group</Table.HeadCell>
          <Table.HeadCell className="text-center">Activity</Table.HeadCell>
        </Table.Head>
        {filteredStudents.map((student, index) => (
          <Table.Body className="divide-y" key={student.id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{student.name}</Table.Cell>
              <Table.Cell>{student.username}</Table.Cell>
              <Table.Cell>{student.email}</Table.Cell>
              <Table.Cell>{student.group}</Table.Cell>
              <Table.Cell className="flex gap-3">
                <div className="flex flex-wrap gap-2">
                  <Button outline color="warning">
                    Edit
                  </Button>
                  <Button
                    outline
                    color="failure"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-full w-16 h-16 bg-blue-600 text-6xl text-white fixed flex justify-center items-center  pb-5 ml-80 right-12 bottom-9 "
      >
        <p className="mt-2">+</p>
      </button>
    </div>
  );
};

export default Students;

// {
//   "id": "985629",
//   "name": "Luce Willa",
//   "username": "will",
//   "email": "lucewill@gmail.com",
//   "group": "Design"
// },
// {
//   "id": "564738",
//   "name": "Arthur Kingsley",
//   "username": "arthur",
//   "email": "arthur.kingsley@example.com",
//   "group": "Front-end"
// },
// {
//   "id": "123456",
//   "name": "Beatrice Ashworth",
//   "username": "beatrice",
//   "email": "beatrice.ashworth@example.com",
//   "group": "Design"
// },
// {
//   "id": "345678",
//   "name": "Rupert Faulkner",
//   "username": "rupert",
//   "email": "rupert.faulkner@example.com",
//   "group": "Cyber Security"
// },
// {
//   "id": "890123",
//   "name": "Florence Wainwright",
//   "username": "florence",
//   "email": "florence.wainwright@example.com",
//   "group": "Front-end"
// },
// {
//   "id": "567890",
//   "name": "Cecil Barrett",
//   "username": "cecil",
//   "email": "cecil.barrett@example.com",
//   "group": "Back-end"
// },
// {
//   "id": "234567",
//   "name": "Imogen Worthington",
//   "username": "imogen",
//   "email": "imogen.worthington@example.com",
//   "group": "Design"
// },
// {
//   "id": "901234",
//   "name": "Hugo Warrington",
//   "username": "hugo",
//   "email": "hugo.warrington@example.com",
//   "group": "Cyber Security"
// },
// {
//   "id": "678901",
//   "name": "Matilda Harrington",
//   "username": "matilda",
//   "email": "matilda.harrington@example.com",
//   "group": "Front-end"
// },
// {
//   "id": "456789",
//   "name": "Percy Hargreaves",
//   "username": "percy",
//   "email": "percy.hargreaves@example.com",
//   "group": "Back-end"
// }
