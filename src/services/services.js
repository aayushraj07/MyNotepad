import axios from "axios";

export const fetchAllNotes = () =>
  new Promise((resolve, reject) => {
    axios("notes")
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

export const saveNote = (newNote) =>
  new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: "add_note",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: newNote,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

export const deleteNote = (id) =>
  new Promise((resolve, reject) => {
    axios({ method: "delete", url: `delete/${id}` })
      // .delete(`delete/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
// export const updateNote = (id, newNote) =>
//   new Promise((resolve, reject) => {
//     axios({
//       method: "put",
//       url: `add_note${id}`,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       data: newNote,
//     })
//       .then((res) => {
//         console.log(res);
//         resolve(res);
//       })
//       .catch((err) => {
//         console.log(err);
//         reject(err);
//       });
//   });

export const updateNote = (id, newNote) =>
  new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `add_note${id}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: newNote,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
