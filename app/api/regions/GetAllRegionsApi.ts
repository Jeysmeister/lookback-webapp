"use server";

const GetAllRegionsApi = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/regions`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export default GetAllRegionsApi;
