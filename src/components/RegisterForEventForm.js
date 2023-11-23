import { useRef, useState } from "react";
import { useRouter } from "next/router";

function RegisterForEventForm() {
  const emailRef = useRef();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailRef?.current.value;
    const { event_id } = router?.query || {};
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailValue.match(validEmailRegex)) {
      setError("Please provide a valid email")
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, event_id }),
      });
      console.log("response", response);
      const data = await response.json();
      console.log(data);
      if(response.status === 200) {
        // do something
        console.log(data?.message || "Successfully registered");
      }
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Get registered for this event!</label>
        <input ref={emailRef} type="email" id="email" placeholder="Please insert your email here" required/>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}

export default RegisterForEventForm;
