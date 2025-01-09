import Button from '@mui/material/Button'
import './splash.css'

const Splash = () => {
  return (
    <>
      <h1>Explore the Flash German game</h1>
      <div className="card">
        <Button onClick={() => console.log("Button : Mitkommen clicked")}>
          Mitkommen
        </Button>
      </div>
    </>
  );
}

export default Splash
