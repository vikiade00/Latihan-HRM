import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useKarir } from "../../../context/karirContext";

const TableKarir = () => {
  const { karirList, loading, deleteKarir } = useKarir();
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const onEdit = (row) => {
    console.log("Edit", row); // Ganti dengan fungsi edit Anda
  };

  const onDelete = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedRow) {
      deleteKarir(selectedRow.id);
    }
    setShowModal(false);
    setSelectedRow(null);
  };

  const columns = [
    { name: "Posisi", selector: (row) => row.posisi, sortable: true },
    { name: "Judul", selector: (row) => row.judul, sortable: true },
    { name: "Kota", selector: (row) => row.kota, sortable: true },
    {
      name: "Aksi",
      cell: (row) => (
        <div>
          <button
            onClick={() => onEdit(row)}
            className="btn btn-sm btn-warning mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(row)}
            className="btn btn-sm btn-error"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={karirList}
        progressPending={loading}
        pagination
      />

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold">Konfirmasi Hapus</h3>
            <p className="mt-2">
              Apakah Anda yakin ingin menghapus data{" "}
              <span className="font-semibold">{selectedRow?.judul}</span>?
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-sm btn-primary"
              >
                Batal
              </button>
              <button onClick={confirmDelete} className="btn btn-sm btn-error">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableKarir;
