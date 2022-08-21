const About = ({about}) => {

  const choiceToShow= () =>{
    const index = Math.floor(Math.random() * about.length);
    return about[index];
  }
  return (
    <main>
      <p className="text-wrap text-center p-5 bg-light mt-5">{choiceToShow()}</p>
    </main>
  )
}

export default About