import React from "react";

import Header from "./web/header";

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
    </div>
  );
}
