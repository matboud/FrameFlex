import React from "react";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Trending from "./components/Trending";


export default function IndexPage() {
  return (
    <div>
      <Header />
      
      <div className="container" style={{
        height: "140vh",
        paddingTop: "100px",
       
      }}>
        <Trending />
        <MoviesList />
      </div>
    </div>
  );
}

export const metadata = {
  title: "FrameFlex",
  description:
    "A React and AWS-powered movie listing app, 'FrameFlex' showcases a Node.js API and an AWS RDS database. It features genre filtering, title searches, and multi-language support, offering a sleek user interface with Material-UI. This project exemplifies modern full-stack development.",
};
