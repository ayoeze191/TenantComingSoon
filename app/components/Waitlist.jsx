"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/48860968/8a533d3f-ffd9-4d4c-965b-0621c64703e4",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [{ name: "email", value: email }],
          }),
        }
      );

      if (res.ok) {
        setSuccess(true);
      } else {
        console.error("HubSpot submission failed", await res.json());
      }
    } catch (err) {
      console.error("Error submitting to HubSpot:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full mt-[4.18rem] flex items-center gap-[1.125rem] max-w-[600px] px-[20px] flex-col md:flex-row"
    >
      <input
        placeholder="Email Address"
        type="email"
        value={email}
        disabled={success}
        onChange={(e) => setEmail(e.target.value)}
        className="border-[#FFFFFF] w-full h-[43px] bg-inherit border-[1px] rounded-[10px] px-[18px] py-[10px]"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-gray-900 text-white flex items-center justify-center px-8 h-11 rounded-lg text-sm font-bold w-full md:w-fit whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Submitting..." : success ? "Joined!" : "Join the Waitlist"}
      </button>
    </form>
  );
}
