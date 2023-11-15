"use server";

import { revalidatePath } from "next/cache";

export async function getData() {
  let data;
  try {
    const res = await fetch(
      "https://crudcrud.com/api/c0143a324eaa418fbaf5e8c08d268cf8/sneakers",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    data = await res.json();

    if (!res.ok) {
      throw new Error();
    }
  } catch (e) {
    throw new Error("Failed data fetching");
  }
  return data;
}

export async function createSneakers(data: {}) {
  try {
    const res = await fetch(
      "https://crudcrud.com/api/c0143a324eaa418fbaf5e8c08d268cf8/sneakers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      revalidatePath("/main");
      return "OK";
    } else {
      return "BAD";
    }
  } catch (e) {
    throw new Error("Faild to create new sneakers");
  }
}

export async function deletSneakers(id: string) {
  try {
    const res = await fetch(
      "https://crudcrud.com/api/c0143a324eaa418fbaf5e8c08d268cf8/sneakers/" +
        id,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      console.log("OK deleted");
      revalidatePath("/main");
      return true;
    } else {
      console.log("ERROR");
      return false;
    }
  } catch (e) {
    throw new Error("Faild to delete sneakers");
  }
}

export async function updateSneakers(data: {}, id: string) {
  try {
    const res = await fetch(
      "https://crudcrud.com/api/c0143a324eaa418fbaf5e8c08d268cf8/sneakers/" +
        id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      revalidatePath("/main");
      return "OK";
    } else {
      return "BAD";
    }
  } catch (e) {
    throw new Error("Faild to update sneakers");
  }
}
