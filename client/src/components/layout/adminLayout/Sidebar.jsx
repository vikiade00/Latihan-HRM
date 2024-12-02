import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-base-200 w-56 h-screen p-6 transition-transform duration-300">
        <div className="font-bold text-lg mb-4">HRM</div>
        <ul className="menu">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <details>
              <summary>CMS</summary>
              <ul>
                <li>
                  <Link to="/karir">Karir</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Master Data</summary>
              <ul>
                <li>
                  <Link to="/cabang">Cabang</Link>
                </li>
                <li>
                  <Link to="/divisi">Divisi</Link>
                </li>
                <li>
                  <Link to="/posisi">Posisi</Link>
                </li>
                <li>
                  <Link to="/kontrak">Kontrak</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Lamaran</summary>
              <ul>
                <li>
                  <Link to="/pelamar">Pelamar</Link>
                </li>
                <li>
                  <Link to="/pelamar-terpilih">Pelamar Terpilih</Link>
                </li>
                <li>
                  <Link to="/proses-undang">Proses Undang</Link>
                </li>
                <li>
                  <Link to="/siap-tes">Siap Tes</Link>
                </li>
                <li>
                  <Link to="/sedang-tes">Sedang Tes</Link>
                </li>
                <li>
                  <Link to="/menunggu-kontrak">Menunggu Di Kontrak</Link>
                </li>
                <hr />
                <li>
                  <Link to="/pelamar-di-kontrak">Pelamar Di Kontrak</Link>
                </li>
                <li>
                  <Link to="/pelamar-ditolak">Pelamar Di Tolak</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>HRM</summary>
              <ul>
                <li>
                  <Link to="/karyawan">Karyawan</Link>
                </li>
                <li>
                  <Link to="/akun-karyawan">Akun Karyawan</Link>
                </li>
                <li>
                  <Link to="/kontrak-karyawan">Kontrak Karyawan</Link>
                </li>
                <li>
                  <Link to="/kehadiran-karyawan">Kehadiran Karyawan</Link>
                </li>
                <li>
                  <Link to="/pengajuan-cuti">Pengajuan Cuti</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Psikotes</summary>
              <ul>
                <li>
                  <Link to="/token-tes">Token Tes</Link>
                </li>
                <li>
                  <Link to="/partisipan">Partisipan</Link>
                </li>
                <li>
                  <Link to="/modul">Modul</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
