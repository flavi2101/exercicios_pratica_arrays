
export default function convertInput(value) {
    const SIM = true;
    const NAO = false;
  let teste = Number(value);
  if (teste) {
    return teste;
  } else {
    if (String(value).toUpperCase() === "SIM") return SIM;
    else  return NAO;
  }
}