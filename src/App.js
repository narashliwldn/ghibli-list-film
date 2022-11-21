import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { getFilmList, searchFilms } from "./api";
import NavbarGhibli from "./component/navbar";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilmList().then((result) => {
      setFilms(result);
    });
  }, []);

  const FilmList = () => {
    return films.map((film, i) => {
      return (
        <Col key={i}>
          <Card className="mt-4 mb-4">
            <Card.Img variant="top" src={`${film.image}`}></Card.Img>
            <Card.Body>
              <Card.Title style={{ height: "60px" }}>{film.title}</Card.Title>
              <Card.Text>
                <i className="bi bi-star"></i>
                &nbsp;{film.rt_score}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  const search = async (q) => {
    const query = await searchFilms(q);
    setFilms(query.data);
  };

  return (
    <div className="App">
      <NavbarGhibli />
      <Container>
        <InputGroup className="mt-4 mb-4">
          <FormControl
            placeholder="Search here"
            onChange={({ target }) => search(target.value)}
          ></FormControl>
        </InputGroup>
        <Row xs={1} sm={2} md={2} lg={3} xl={5}>
          <FilmList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
