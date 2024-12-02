import React from "react";
import TableKarir from "./TableKarir";
import { Link } from "react-router-dom";

const Karir = () => {
  return (
    <div>
      <div className=" text-2xl font-semibold">Karir</div>
      <div className="gap-2 mt-4 flex">
        <input type="search" className="input input-bordered input-sm" />
        <Link to={"/karir/form"} className="btn btn-primary btn-sm">
          +
        </Link>
      </div>
      <div>
        <TableKarir />
      </div>
    </div>
  );
};

export default Karir;
