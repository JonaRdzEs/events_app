import { useRef, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

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
      const data = await response.json();
      if(response.status === 200) {
        toast.success(data.message);
        emailRef.current.value = "";
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error("There was an error", error);
    }
  };

  return (
    <>
      <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-300 rounded-md w-64 py-1 px-4"
          aria-label="Register for the event" 
          ref={emailRef} 
          type="email" 
          id="email" 
          placeholder="Please insert your email here" 
          required
        />
        <button className="bg-green-600 text-white font-semibold rounded-md p-2 w-64" type="submit">Register</button>
      </form>
      {error && <p className="text-sm text-red-400 text-left mt-2">{error}</p>}
    </>
  );
}

export default RegisterForEventForm;
