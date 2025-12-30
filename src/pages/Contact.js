import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mlgekkdn"); // your Formspree ID

  if (state.succeeded) {
    return (
      <div className="page center-box">
        <div className="contact-card">
          <h2>Thank you 🤍</h2>
          <p className="soft-text">
            Mun paigali Tame Kn feel Kalaa!!<br />
            I’ll keep them safe.🙌🏻
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page center-box">
      <div className="contact-card">
        <h2>Honestly Kahiba!</h2>
        <p className="soft-text">
          Jaha B Feel Kala After Seeing This 
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <textarea
            id="message"
            name="message"
            placeholder="Jalddiiiiii!!!🫣"
            rows="5"
            required
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="magic-btn"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
