// MUI Conmponents
import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

// Icons
import { DeleteOutline, Person } from "@mui/icons-material";

export const ContactList = ({ contacts, setContacts }) => {
  const removeHandler = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        {contacts.length ? (
          <List>
            {contacts.map((contact) => (
              <ListItem
                key={contact.id}
                secondaryAction={
                  <IconButton
                    onClick={() => removeHandler(contact.id)}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteOutline />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={contact.fullName}
                  secondary={contact.phone}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography textAlign="center" color="GrayText">
            دفترچه تلفن خالی است
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
