export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));

  if (token && (token.access || token.accessToken)) {
    return { Authorization: "Bearer " + token.access || token.accessToken };
  } else {
    return {};
  }
}
