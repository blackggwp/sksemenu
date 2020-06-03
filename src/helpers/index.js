export async function callAPI(url, data = {}, method = "POST") {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const controller = new AbortController();
  const signal = controller.signal;
  var req = {
    method: method,
    headers: myHeaders,
    body: data,
    redirect: "follow",
    signal: signal,
  };
  try {
    const res = await fetch(url, req);
    const result = await res.json();
    controller.abort()
    return result
  } catch (error) {
    // error = error;
    console.log("callAPI error", error);
    controller.abort();
  }
}