import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "Notes Mini",
        description:
          "A modern, fast, minimalistic note taking app.",
        stack: ["TypeScript", "ReactJS"],
        link: "https://notes-mini.vercel.app/",
      },
      {
        name: "Typing Speed Test",
        description:
          "A typing test that measures an individual’s typing speed (WPM) and accuracy.",
        stack: ["ReactJS"],
        link: "https://typing-speed-test.onrender.com/",
      },
      {
        name: "GoogleCloudReady Facilitator Program Leaderboard",
        description:
          "Leaderboard for the students of Jalpaiguri Government Engineering College participating in the GoogleCloudReady Facilitator program.",
        stack: ["NextJS", "Material UI"],
        link: "https://gcr-leaderboard.vercel.app/",
      },
      {
        name: "Book Finder",
        description:
          "A book finder application to retrieve information about a book that the user searches for.",
        stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Google Books API"],
        link: "https://book-finder.onrender.com/",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
