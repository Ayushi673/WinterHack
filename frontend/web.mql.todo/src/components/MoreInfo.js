import { Container, Link } from "@material-ui/core";

export function MoreInfo() {
  return (
    <>
      <MoreInfoTemplateAndDocs />
    </>
  );
}

function MoreInfoItem({ children }) {
  return (
    <Container
      style={{ textAlign: "center", padding: "14px 0", marginTop: "auto" }}
    >
      {children}
    </Container>
  );
}

export function MoreInfoTemplateAndDocs() {
  return (
    <MoreInfoItem>
      <span>Built with MongoDB Realm, ❤️ and ☕️ by Ayushi</span> |{" "}
      <Link target="_blank" href="https://docs.mongodb.com/realm">
        Docs
      </Link>
    </MoreInfoItem>
  );
}