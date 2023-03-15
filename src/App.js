import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Pavithra Dhananjani",
    location: "Sri Lanka",
    tagline: "Undergraduate",
    email: "dhananjanipavithra@gmail.com",
    availability: "Open for work",
    brand:
      "I'm an enthusiastic and a committed undergraduate who follows a degree in IT at the University of Sri Jayewardenepura.Currently I'm studying web development with reactjs and so far I have studied Mobile Application Development with ReactNative as well.Apart from that I'm a Musician and currently colloborating with SD Music Records.Also I would like to introduce me as a content writer at ICTSA (Information and Communication Technology Student Association) at the University of Sri Jayewardenepura.I'm keen learner on new things and always makes efforts in order to offer my best in what I do.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
