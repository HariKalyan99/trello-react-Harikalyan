import React from "react";
import { Container, Image, Navbar, Spinner, Stack } from "react-bootstrap";
import { LuLayoutDashboard } from "react-icons/lu";

const TrelloNavigation = () => {
  return (
    <Navbar
      variant="dark"
      bg="dark"
      expand="lg"
      className={`shadow position-sticky top-8 rounded-5 ${false && "position-relative z-1"}`}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
            thumbnail
            className="bg-transparent h-20 w-20 border border-0"
          />
        </Navbar.Brand>
        {false ? (
          <Stack className="border-0 border-light w-100 h-100 rounded-5 px-3 py-1 bg-secondary d-flex justify-content-end">
            <Spinner
              animation="grow"
              className="w-100 h-100 d-flex justify-center"
            >
              <LuLayoutDashboard className="text-light fs-2" />
            </Spinner>
          </Stack>
        ) : (
          <div className="border-0 border-light w-100 h-100 rounded-5 px-3 py-1 bg-secondary d-flex justify-content-end">
            <LuLayoutDashboard className="text-light fs-2" />
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default TrelloNavigation;
