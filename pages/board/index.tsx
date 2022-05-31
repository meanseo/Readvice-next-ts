import AddPost from "@/components/board/AddPost";
import Article from "@/components/board/Article";
import { IArticle } from "@/types";
import { InferGetStaticPropsType } from "next";
import React, { useState } from "react";

export default function BoardPage({articles}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [articleList, setArticleList] = useState(articles)

    const addPost =async(e:React.FormEvent, formDate: IArticle)=>{
      e.preventDefault()
      const article: IArticle= {
        artId: Math.random(),
        title: formDate.title,
        content: formDate.content
      }
    }
    return <>
    <AddPost write={AddPost} />
    {articleList.map((article: IArticle)=>(
      <Article key={article.artId} article={article}/>
    ))}
    
    </>
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL)
  const articles: IArticle[] = await res.json()

  return { props: {articles}}
}

const BASE_URL: string = "http://localhost:8080/articles"