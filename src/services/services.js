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

// export const saveAllNotes = () => {
//   new Promise((resolve, reject) => {
//     axios({
//       method: "post",
//       url: "add_note",
//       data: {},
//     });
//   });
// };
