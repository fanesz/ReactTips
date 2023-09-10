// src: https://www.youtube.com/shorts/_e4m4DjnBCE

// ================= BEFORE =================
type data = {}

function getData(data: data) {
  return data
}

getData({ name: "John" })
getData(new Date()) // should be not passed


// ================= AFTER =================
type data2 = Record<string, unknown>;
type data3 = { [key: string]: unknown }; // alternative

function getData2(data: data2) {
  return data
}

getData2({ name: "John" })
// getData2(new Date()) // error
