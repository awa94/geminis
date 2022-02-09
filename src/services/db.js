import Dexie from "dexie";

const db = new Dexie("myDatabase");
db.version(1).stores({
  linksList: "++id, name, url",
});

export const addLink = async (name, url) => {
  try {
    const id = await db.linksList.add({
      name,
      url,
    });
    return id;
  } catch (error) {
    return null;
  }
};

export const getLinks = async () => await db.linksList.toArray();

export const deleteById = async (id) =>
  await db.linksList.where({ id }).delete();
