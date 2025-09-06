import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative bg-blue-50">
      <div className="h-40 w-full absolute inset-0 bg-radial from-white to-transparent rounded-full"/>
      <Container>
        <NavBar />
      </Container>
    </div>
  );
}
