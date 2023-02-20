import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "wasimreja",
        link: "https://github.com/wasimreja",
      },
      {
        medium: "email",
        username: "wr2435@it.jgec.ac.in",
        link: "mailto:wr2435@it.jgec.ac.in",
      },
      {
        medium: "facebook",
        username: "wasim.reja.07",
        link: "https://www.facebook.com/wasim.reja.07",
      },
      {
        medium: "linkedin",
        username: "wasimreja",
        link: "https://www.linkedin.com/in/wasimreja",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
