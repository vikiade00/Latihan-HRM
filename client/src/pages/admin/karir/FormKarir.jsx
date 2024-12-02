import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useKarir } from "../../../context/karirContext";

const FormKarir = () => {
  const [formData, setFormData] = useState({
    posisi: "",
    judul: "",
    kota: "",
    deskripsi: "",
    kebutuhan: "",
  });
  const { id } = useParams();
  const { karirList, createKarir, updateKarir } = useKarir();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundData = karirList.find((item) => item.id === parseInt(id));
      if (foundData) {
        setFormData(foundData);
      }
    }
  }, [id, karirList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateKarir(id, formData);
    } else {
      createKarir(formData);
    }
    navigate("/karir");
  };

  const handleCancel = () => {
    navigate("/karir");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">{id ? "Edit" : "Add"} Karir</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mt-5 max-w-[60%]">
        <div className="form-control flex flex-row items-center justify-between">
          <label className="label">
            <span className="label-text font-bold">Posisi :</span>
          </label>
          <input
            type="text"
            name="posisi"
            value={formData.posisi}
            onChange={handleChange}
            className="input input-bordered w-96 input-sm"
            placeholder="Masukkan Posisi"
            required
          />
        </div>

        <div className="form-control flex flex-row items-center justify-between">
          <label className="label">
            <span className="label-text font-bold">Judul :</span>
          </label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            className="input input-bordered w-96 input-sm"
            placeholder="Masukkan Judul"
            required
          />
        </div>

        <div className="form-control flex flex-row items-center justify-between">
          <label className="label">
            <span className="label-text font-bold">Kota :</span>
          </label>
          <input
            type="text"
            name="kota"
            value={formData.kota}
            onChange={handleChange}
            className="input input-bordered w-96 input-sm"
            placeholder="Masukkan Kota"
            required
          />
        </div>

        <div className="form-control flex flex-row items-center justify-between">
          <label className="label">
            <span className="label-text font-bold">Deskripsi :</span>
          </label>
          <input
            type="text"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            className="input input-bordered w-96 input-sm"
            placeholder="Masukkan Deskripsi"
            required
          />
        </div>

        <div className="form-control flex flex-row items-center justify-between">
          <label className="label">
            <span className="label-text font-bold">Kebutuhan :</span>
          </label>
          <input
            type="text"
            name="kebutuhan"
            value={formData.kebutuhan}
            onChange={handleChange}
            className="input input-bordered w-96 input-sm"
            placeholder="Masukkan Kebutuhan"
            required
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-primary btn-sm"
          >
            Batal
          </button>
          <button type="submit" className="btn btn-primary btn-sm">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormKarir;
