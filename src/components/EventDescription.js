import Markdown from "react-markdown";

function EventDescription({ children }) {
  return (
    <Markdown>
      {children}
    </Markdown>
  );
}

export default EventDescription;
