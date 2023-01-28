import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Login from "./components/Login";
import { data } from "./components/data";
import CardDetails from "./components/CardDetails";
import NoMatch from "./components/NoMatch";
import NewsUpdates from "./components/NewsUpdates";
import NewsDetails from "./components/NewsDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={[
              <Header />,
              <Main articles={data.articles} />,

              <Footer />,
            ]}
          />
          <Route path="*" element={[<Header />, <NoMatch />]} />

          <Route
            path="/news-updates"
            element={[
              <Header />,
              <Main articles={data.articles} />,

              <Footer />,
            ]}
          />

          <Route
            path="/news-updates/:slug"
            element={[<Header />, <CardDetails />, <Footer />]}
          />

          <Route
            path="/top-stories"
            element={[<Header />, <NewsUpdates />, <Footer />]}
          />
          <Route
            path="/top-stories/:slug/:id"
            element={[<Header />, <NewsDetails />, <Footer />]}
          />

          <Route path="/columns" element={[<Header />, <Footer />]} />

          <Route path="/interviews" element={[<Header />, <Footer />]} />

          <Route path="/environment" element={[<Header />, <Footer />]} />

          <Route path="/rti" element={[<Header />, <Footer />]} />

          <Route path="/rti" element={[<Header />, <Footer />]} />

          <Route path="/know-the-law" element={[<Header />, <Footer />]} />

          <Route path="/login" element={[<Header />, <Login />, <Footer />]} />

          <Route path="/job-updates" element={[<Header />, <Footer />]} />

          <Route path="/book-reviews" element={[<Header />, <Footer />]} />

          <Route path="/events-corner" element={[<Header />, <Footer />]} />

          <Route path="/law-firms" element={[<Header />, <Footer />]} />

          <Route path="/sc-judgments" element={[<Header />, <Footer />]} />

          <Route path="/law-school" element={[<Header />, <Footer />]} />

          <Route path="/ibc" element={[<Header />, <Footer />]} />

          <Route path="/tax" element={[<Header />, <Footer />]} />

          <Route path="/arbitration" element={[<Header />, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
