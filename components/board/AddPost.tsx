import { IArticle } from "@/types";
import React, { useState } from "react";
import Article from "./Article";

type Props = {
  write: (e:React.FormEvent, formData: IArticle)=> void
}

const AddPost: React.FC<Props>=({write})=>{
    const [formData, setFormData] = useState<IArticle>()
    return (
      <form onSubmit={e => write(e, formData)}>
        <h1></h1>
        <h1></h1>
        <button>버튼</button>
      </form>
    );
  };

export default Article