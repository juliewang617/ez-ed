import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";

/**
 * @returns {ReactNode} A React Element that renders the Questionaire page.
 */
export default function Questionaire() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    "1. Over the last week, on how many days has your/your child’s skin been itchy because of eczema?",
    "2. Over the last week, on how many nights has your/your child’s sleep been disturbed because of eczema?",
    "3. Over the last week, on how many days has your/your child’s skin been bleeding because of eczema?",
    "4. Over the last week, on how many days has your/your child’s skin been weeping or oozing clear fluid because of eczema?",
    "5. Over the last week, on how many days has your/your child’s skin been cracked because of eczema?",
    "6. Over the last week, on how many days has your /your child’s skin been flaking off because of eczema?",
    "7. Over the last week, on how many days has your/your child’s skin felt dry or rough because of the eczema?",
  ];

  const nextQuestion = () => {
    var answers = document.getElementsByName("days");
    var checked = false;

    // for-each loop to get the button that was checked
    answers.forEach((answer) => {
      if (answer.checked) {
        setScore((i) => i + parseInt(answer.value));
        checked = true;
      }
    });

    if (!checked) {
      console.log("please select a question.");
    } else {
      setIndex((i) => i + 1);
    }

    // Display results
    if (index >= questions.length - 1) {
      var button = document.getElementsByClassName("questionaire-next-btn")[0];
      var retake_button = document.getElementsByClassName(
        "questionaire-retake-btn"
      )[0];
      var container = document.getElementsByClassName("radio-container")[0];
      var results = document.getElementsByClassName("results")[0];
      var score_meaning = document.getElementsByClassName(
        "score-meaning-container"
      )[0];
      button.style.setProperty("display", "none");
      retake_button.style.setProperty("display", "flex");
      container.style.setProperty("display", "none");
      results.style.setProperty("display", "flex");
      score_meaning.style.setProperty("display", "flex");
      if (score <= 2) {
        results.innerHTML =
          "With a score of " +
          String(score) +
          ", You or your child likely has clear to almost clear eczema symptoms.";
      } else if (3 <= score <= 7) {
        results.innerHTML =
          "With a score of " +
          String(score) +
          ", You or your child likely has signs of mild eczema.";
      } else if (8 <= score <= 16) {
        results.innerHTML =
          "With a score of " +
          String(score) +
          ", You or your child likely has signs of moderate eczema.";
      } else if (17 <= score <= 24) {
        results.innerHTML =
          "With a score of " +
          String(score) +
          ", You or your child likely has signs of severe eczema.";
      } else if (25 <= score <= 28) {
        results.innerHTML =
          "With a score of " +
          String(score) +
          ", You or your child likely has signs of very severe eczema.";
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="page-heading-section">
        <h1 className="page-title">Questionnaire</h1>
        <p className="page-caption">
          Take this short questionnaire, suitable for all ages, to learn more
          about your systems.
        </p>
      </div>

      <form className="page-body-flex">
        <div>
          <p>
            This questionnaire is adapted from the Patient-Oriented Eczema
            Measure{" "}
            <a href="https://www.nottingham.ac.uk/research/groups/cebd/resources/poem.aspx">
              (POEM)
            </a>{" "}
            from the University of Nottingham. It is suited for both adults and
            children to determine eczema severity.
          </p>
        </div>
        <p className="results"></p>
        <p>
          <b>{questions[index]}</b>
        </p>

        <div className="radio-container">
          <input type="radio" id="no-days" name="days" value={0} />
          <label for="no-days">No Days</label>

          <input type="radio" id="1-2-days" name="days" value={1} />
          <label for="1-2-days">1-2 Days</label>

          <input type="radio" id="3-4-days" name="days" value={2} />
          <label for="3-4-days">3-4 Days</label>

          <input type="radio" id="5-6-days" name="days" value={3} />
          <label for="5-6-days">5-6 Days</label>

          <input type="radio" id="everyday" name="days" value={4} />
          <label for="everyday">Everyday</label>
        </div>

        <button
          type="button"
          className="questionaire-next-btn"
          onClick={nextQuestion}
        >
          Next
        </button>

        <button
          type="button"
          className="questionaire-retake-btn"
          onClick={() => (window.location = "/questionaire")}
        >
          {" "}
          Retake
        </button>

        <div className="score-meaning-container">
          <ul>
            <li>0 to 2 = Clear or almost clear</li>
            <li>3 to 7 = Mild eczema</li>
            <li>8 to 16 = Moderate eczema</li>
            <li>17 to 24 = Severe eczema</li>
            <li>25 to 28 = Very severe eczema</li>
          </ul>
        </div>
      </form>

      <Footer />
    </div>
  );
}
