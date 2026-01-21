import React from "react"
import Header from "/src/components/Header"
import Footer from "/src/components/Footer"

const Component = ({ children }) => {
  return (
    <div id="container">
      <Header />
      <main id="main" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Component
