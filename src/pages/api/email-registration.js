import path from "path";
import fs from "fs";

const buildPath = () => path.join(process.cwd(), "data", "data.json");

const extractData = (filePath) => {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
};

function handler(request, response) {
  const { method } = request;
  // check if the format of the email is OK

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return response.status(404).json({
      status: 404,
      message: "Events data not found!",
    });
  }

  if (method === "POST") {
    const { email, event_id } = request.body;
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email || !email.match(validEmailRegex)) {
      response.status(400).json({
        code: "BAD_REQUEST",
        message: "Please provide a valid email",
      });
      return;
    }
    if (!event_id) {
      response.status(400).json({
        code: "BAD_REQUEST",
        message: "Please provide a valid event id",
      });
      return;
    }

    const event_to_register = allEvents.filter((event) => event.id === event_id);

    if (!event_to_register) {
      return response.status(404).json({
        status: 404,
        message: "Not event found with the provided event ID",
      });
    }
    if (event_to_register.emails_registered.includes(email)) {
      return response.status(409).json({
        message: "This email has already been registered",
      });
    }
    const filtered_event_index = allEvents.findIndex((event) => event.id === event_id);
    const updated_data = allEvents.splice(filtered_event_index, 1, {
      ...event_to_register,
      emails_registered: [...event_to_register.emails_registered, email],
    });
    fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: updated_data }, null, 2));

    response.status(200).json({
      message: `You have been registered successfully with the email: ${email}`,
    });
  }
}

export default handler;
