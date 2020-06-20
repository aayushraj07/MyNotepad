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
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
