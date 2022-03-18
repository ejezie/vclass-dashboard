import React from "react";

import Button from "./Button";
import Filter from "./Filter";
import Select from "./Select";

import del from "../assets/icons/delete.png";
import dotmenu from "../assets/icons/dotmenu.png"
import exprt from "../assets/icons/export.png"

function FormStudy() {
  return (
    <div className="formstudy">
      <div className="wrap">
        <Filter />
        <Button btnText={"Upload new matrial"} btnAction={() => {}} />
      </div>
      <div className="border"></div>
      <div className="select-wrap">
        <Select option={"Mathematics"} />
      </div>
      <div className="file-wrap">
        <div className="wrap">
          <img src={dotmenu} alt="icon" />
          <div className="text">Pdf</div>
        </div>
        <div className="wrap">
          <img src={exprt} alt="icon" />
          <div className="text green">File pdf</div>
          <img src={del} alt="icon" />
        </div>
      </div>
      <div className="file-wrap">
        <div className="wrap">
          <img src={dotmenu} alt="icon" />
          <div className="text">Pdf</div>
        </div>
        <div className="text-wrap">
          The Evolution of Type examines 100 landmark typefaces from the history
          of font design,from the type used by Johannes Gutenberg to produce his
          42-Line Bible, to the latest digital typefaces. It reveals the meaning
          behind typographic characters and shows howthe use of type has changed
          over time.
          <img src={del} alt="icon" />
        </div>
      </div>
      <div className="file-wrap">
        <div className="wrap">
          <img src={dotmenu} alt="icon" />
          <div className="text">Pdf</div>
        </div>
        <div className="wrap">
          <img src={exprt} alt="icon" />
          <div className="text green">File pdf</div>
          <img src={del} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default FormStudy;
