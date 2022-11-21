import axios from "axios";

const url = `https://ghibliapi.herokuapp.com/`;

export const getFilmList = async () => {
  const films = await axios.get(`${url}/films`);
  return films.data;
};

export const searchFilms = async (q) => {
  const search = await axios.get(`${url}/films?q=${q}`);
  return search;
};

export const getPeople = async () => {
  const people = await axios.get(`${url}/people`);
  return people.data;
};

export const getSpecies = async () => {
  const species = await axios.get(`${url}/species`);
  return species.data;
};

export const getLocations = async () => {
  const locations = await axios.get(`${url}/locations`);
  return locations.data;
};

export const getVehicles = async () => {
  const vehicles = await axios.get(`${url}/vehicles`);
  return vehicles.data;
};
