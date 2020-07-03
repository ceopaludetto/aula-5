import axios from "axios";

async function jeitoNovo(cep) {
  return axios.get(`http://viacep.com.br/ws/${cep}/json`);
}

export async function Promises() {
  // < es6

  console.log("inicio promise");
  jeitoNovo("02137030")
    .then((res) => {
      console.log("fim promise");
    })
    .catch(() => {
      console.log("fim promise catch");
    });

  // async/await es6 -> 2015

  try {
    console.log("inicio promise await");
    const res = await jeitoNovo("02137030");
    const res2 = await jeitoNovo("01513030");

    console.log(res.data);

    console.log("fim promise await");
  } catch (error) {
    console.log("fim promise await catch");
  }

  const responses = await Promise.all([
    jeitoNovo("02137030"),
    jeitoNovo("01513030"),
  ]);

  console.log(responses.map((r) => r.data));
}
