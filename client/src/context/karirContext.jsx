import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";

const KarirContext = createContext();

export const useKarir = () => useContext(KarirContext);

export const KarirProvider = ({ children }) => {
  const [karirList, setKarirList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data dari API
  const fetchKarir = async () => {
    setLoading(true);
    try {
      const response = await api.get("/karir");
      setKarirList(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Create data
  const createKarir = async (data) => {
    try {
      const response = await api.post("/karir", data);
      setKarirList((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  // Update data
  const updateKarir = async (id, data) => {
    try {
      await api.put(`/karir/${id}`, data);
      setKarirList((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...data } : item))
      );
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // Delete data
  const deleteKarir = async (id) => {
    try {
      await api.delete(`/karir/${id}`);
      setKarirList((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    fetchKarir();
  }, []);

  return (
    <KarirContext.Provider
      value={{ karirList, loading, createKarir, updateKarir, deleteKarir }}
    >
      {children}
    </KarirContext.Provider>
  );
};
