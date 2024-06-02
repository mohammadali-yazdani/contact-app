import { Container } from "@mui/material";
import { AddForm } from "./components/AddForm";
import { Header } from "./components/Header";
import { ContactList } from "./components/ContactList";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <Container maxWidth="md">
      <Header />
      <AddForm setContacts={setContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </Container>
  );
}

export default App;
